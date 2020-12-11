import { Request, Response } from 'express';
import { Controller, Get } from '../decorators';

@Controller('/user')
export class UsersController {
    @Get('/')
    getUsers(req: Request, res: Response) {
        res.send('Typescript Decorators are awesome !!!');
    }

    @Get('/:name')
    getAUser(req: Request, res: Response) {
        res.send(`Profile of ${req.params.name}`)
    }
}