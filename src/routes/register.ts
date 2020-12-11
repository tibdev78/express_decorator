import 'reflect-metadata';
import { UsersController } from '../controllers';
import * as express from 'express';
import {RouteDefinition} from '../models';

export const registerController = (app: express.Application): void => {
    const controllers = [UsersController];
    controllers.forEach(controller => {
        const instance = new controller();
        const prefix = Reflect.getMetadata('prefix', controller);
        const routes: Array<RouteDefinition> = Reflect.getMetadata('routes', controller);

        routes.forEach(route => {
            app[route.method](prefix + route.path, (req: express.Request, res: express.Response) => {
                // Execute our method for this path and pass our express request and response object.
                instance[route.methodName](req, res);
            });
        })
    })
}