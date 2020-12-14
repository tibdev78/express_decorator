import { Get, Param, Post, Body, JsonController, HttpCode, OnUndefined, HttpError } from 'routing-controllers';
import { ResponseRequest, User } from '../models';

@JsonController('/users')
export default class UsersController {
  @Get('/')
  getUsers() {
    return 'Typescript Decorators are awesome !!!';
  }

  @Get('/:name')
  getAUser(@Param('name') name: string) {
    return `Profile of ${name}`;
  }

  @HttpCode(200)
  @Post('/save')
  @OnUndefined(404)
  saveUser(@Body({ required: true }) user: User): ResponseRequest {
    return {
      data: user,
      message: 'user Save',
    };
  }
}
