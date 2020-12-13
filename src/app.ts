import 'reflect-metadata';
import { createExpressServer } from "routing-controllers";
import * as rg from './routes/register';

const app = createExpressServer({
    cors: true,
    controllers: rg.registerController(),
});

app.listen(3000, () => console.log('Server is running on port 3000'))
