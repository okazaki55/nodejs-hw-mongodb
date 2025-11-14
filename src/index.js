import setupServer from './server.js';
import express from 'express';
import { initMongoConnection } from './db/initMongoConnection.js';

const bootstrap = async () => {
  await initMongoConnection();
  setupServer();
};

bootstrap();

const app = express();

setupServer();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const message = 'terminal deneme';

console.log(message);
