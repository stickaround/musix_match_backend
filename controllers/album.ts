import { Request, Response } from 'express';

import { getAlbumList } from '../services/api';

const albumController = {
  getAlbums: async (req: Request, res: Response) => {
    const { artist_id } = req.query;
    const albumsResponse = await getAlbumList(artist_id);
    return res.status(200).json(albumsResponse.data.message.body.album_list);
  },
};

export { albumController };
