import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { compareSync as bcryptCompareSync } from 'bcrypt';
import { AuthResponseDto } from './auth.dto';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {

    private jwtExpirationTimeInSeconds: number;

    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
    ) {
        this.jwtExpirationTimeInSeconds = 3600;
    }

    async signIn(username: string, password: string): Promise<AuthResponseDto> {
        const foundUser = await this.usersService.findByUserName(username);

        if (!foundUser || !bcrypt.compareSync(password, foundUser.password)) {
            throw new UnauthorizedException();
        }

        const payload = { sub: foundUser.id, username: foundUser.username };

        const token = this.jwtService.sign(payload);

        return { token, expiresIn: this.jwtExpirationTimeInSeconds }

    }

}
