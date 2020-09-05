import 'reflect-metadata';
import express from 'express';

import createDatabaseConnection from './database/createConnection';

const establishDatabaseConnection = async (): Promise<void> => {
  await createDatabaseConnection();
};

const initializeExpress = (): void => {
  const app = express();
  app.listen(process.env.PORT || 3000);
};

const initializeApp = async (): Promise<void> => {
  await establishDatabaseConnection();
  initializeExpress();
};

initializeApp().catch((error) => {
  console.log(error);
});
