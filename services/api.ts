import axios from 'axios';

import { appConfig } from '../config/constants';
import { ChartingArtistResponse, AlbumListResponse } from '../types/index';

const api = axios.create({
  baseURL: appConfig.musixMatch.apiUrl,
});

//get top 3 charting artists
export const getChartingArtists = (country) =>
  api.get<ChartingArtistResponse>(
    `chart.artists.get?page=1&page_size=3&apikey=${appConfig.musixMatch.apiKey}&country=${country}`
  );

export const getAlbumList = (artist_id) =>
  api.get<AlbumListResponse>(
    `artist.albums.get?page=1&page_size=3&apikey=${appConfig.musixMatch.apiKey}&artist_id=${artist_id}&s_release_date=desc&g_album_name=1`
  );
