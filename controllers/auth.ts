import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { User } from '../models/user';
import { appConfig } from '../config/constants';
import { MSGs } from '../constants';

const authController = {
  login: async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      if (!username && !password) {
        return res.status(422).json({ message: MSGs.INVALID_CREDENTIALS });
      }
      const user = await User.findOne({ username });
      if (!user) {
        return res
          .status(401)
          .json({ message: MSGs.USERNAME_OR_PASSWORD_INCORRECT });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res
          .status(401)
          .json({ message: MSGs.USERNAME_OR_PASSWORD_INCORRECT });
      }
      const token = jwt.sign(
        {
          user_id: user._id,
          username,
          country: user.country,
        },
        appConfig.jwtKey,
        {
          expiresIn: '2d',
        }
      );
      return res.status(200).json({ user, token });
    } catch (err) {
      return res.status(500).json({ message: MSGs.SERVER_ERROR });
    }
  },
  register: async (req: Request, res: Response) => {
    try {
      const { username, password, country } = req.body;
      if (!username || !password || !country) {
        return res.status(422).send({ message: MSGs.INVALID_CREDENTIALS });
      }

      const oldUser = await User.findOne({ username });
      if (oldUser) {
        return res.status(422).send({ message: MSGs.USER_ALREADY_EXISTS });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        username,
        password: hashedPassword,
        country,
      });
      const token = jwt.sign(
        {
          user_id: user._id,
          username,
          country,
        },
        appConfig.jwtKey,
        { expiresIn: '2d' }
      );
      return res.status(200).json({ user, token });
    } catch (err) {
      return res.status(500).json({ message: MSGs.SERVER_ERROR });
    }
  },
  getCurrentUser: async (req: Request, res: Response) => {
    return res.status(200).json(req.user);
  },
};

export { authController };
