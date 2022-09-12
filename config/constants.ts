export const appConfig = {
  mongoose: {
    url: process.env.mongoUrl || 'mongodb://127.0.0.1:27017/musix_match',
  },
  port: process.env.port || 3000,
  jwtKey: process.env.jwtKey || 'some$ecretKey!',
};
