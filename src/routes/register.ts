import 'reflect-metadata';
import { UsersController } from '../controllers';

export const registerController = (): Array<any> => {
    return [UsersController]
}