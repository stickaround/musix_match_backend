import { Request, Response } from 'express';

import { getTrackList } from '../services/api';

const trackController = {
  getTracks: async (req: Request, res: Response) => {
    const { album_id } = req.query;
    const tracksResponse = await getTrackList(album_id);
    return res.status(200).json(tracksResponse.data.message.body.track_list);
  },
};

export { trackController };
