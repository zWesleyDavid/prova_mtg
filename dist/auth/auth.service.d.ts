import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { AuthResponseDto } from './auth.dto';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    private readonly configService;
    private jwtExpirationTimeInSeconds;
    constructor(usersService: UsersService, jwtService: JwtService, configService: ConfigService);
    signIn(username: string, password: string): Promise<AuthResponseDto>;
}
