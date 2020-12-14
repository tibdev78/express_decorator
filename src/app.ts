import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import logger from './utils/logger';

const app = createExpressServer({
  cors: true,
  controllers: [`${__dirname  }/controllers/*.ts`],
});

app.listen(3000, () => logger.info({timeStamp: new Date().toLocaleString(), message: "Server is running on port 3000"}));
