export const appConfig = {
  mongoose: {
    url: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/musix_match',
  },
  port: process.env.PORT || 3000,
  jwtKey: process.env.JWT_KEY || 'some$ecretKey!',
  musixMatch: {
    apiUrl: process.env.API_URL || 'https://api.musixmatch.com/ws/1.1/',
    apiKey: process.env.API_KEY || '8e343bd24865f49e56ffb12348bb9ccf',
  },
};
