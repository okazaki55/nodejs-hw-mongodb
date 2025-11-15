import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';

setupServer();

const bootstrap = async () => {
  await initMongoConnection();
  setupServer();
};

bootstrap();
