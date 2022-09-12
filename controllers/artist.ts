import { Request, Response } from 'express';

import { getChartingArtists as getArtists } from '../services/api';

const artistController = {
  getChartingArtists: async (req: Request, res: Response) => {
    const { user } = req;
    const chartingArtistResponse = await getArtists(user.country);
    return res
      .status(200)
      .json(chartingArtistResponse.data.message.body.artist_list);
  },
};

export { artistController };
