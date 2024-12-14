import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { USER_API_PREFIXES } from './user.constant';
import { UserService } from './user.service';

@Controller(USER_API_PREFIXES.BASE)
@ApiTags(USER_API_PREFIXES.BASE)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(USER_API_PREFIXES.QUERY.GET_ME)
  @ApiOkResponse()
  getMe() {
    return 'Hello dev';
  }
}
