import { Body, Controller, Delete, Get, HttpCode, 
    HttpStatus, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Post('register')
    @UsePipes(new ValidationPipe())
    @HttpCode(HttpStatus.CREATED)
    async register(@Body() UserDto: UserDto) {
        return this.usersService.create(UserDto);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':username')
    @HttpCode(HttpStatus.OK)
    findByUserName(@Param('username') username: string) {
        return this.usersService.findByUserName(username);
    }

    @Put(':username')
    @HttpCode(HttpStatus.OK)
    update(@Param('username') username: string, @Body() user: UserDto) {
        return this.usersService.update(username, user);
    }

    @Delete(':username')
    @HttpCode(HttpStatus.OK)
    delete(@Param('username') username: string) {
        return this.usersService.delete(username);
    }
}
