import mongoose from 'mongoose';

import { app } from './app';
import { appConfig } from './config/constants';

mongoose
  .connect(appConfig.mongoose.url)
  .then(() => {
    console.log('connected to MongoDB!');

    app.listen(appConfig.port, () => {
      console.log(`App started on ${appConfig.port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
