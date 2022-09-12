import axios from 'axios';

import { appConfig } from '../config/constants';
import { ChartingArtistResponse } from '../types/index';

const api = axios.create({
  baseURL: appConfig.musixMatch.apiUrl,
});

//get top 3 charting artists
export const getChartingArtists = (country) =>
  api.get<ChartingArtistResponse>(
    `chart.artists.get?page=1&page_size=3&apikey=${appConfig.musixMatch.apiKey}&country=${country}`
  );
