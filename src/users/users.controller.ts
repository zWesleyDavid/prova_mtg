<<<<<<< HEAD
import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService){}

    @Post()
    create(@Body() user: UserDto){
       return this.usersService.create(user);
    }


}
=======
import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService){}

    @Post()
    create(@Body() user: UserDto){
       return this.usersService.create(user);
    }


}
>>>>>>> c97005e54684d39103809c27e2c9aa6fbec032d4
