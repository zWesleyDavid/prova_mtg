<<<<<<< HEAD
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthResponseDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(
        @Body('username') username: string,
        @Body('password') password: string
    ): Promise<AuthResponseDto> {
        return this.authService.signIn(username, password);
    }



}
=======
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthResponseDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(
        @Body('username') username: string,
        @Body('password') password: string
    ): Promise<AuthResponseDto> {
        return this.authService.signIn(username, password);
    }



}
>>>>>>> c97005e54684d39103809c27e2c9aa6fbec032d4
