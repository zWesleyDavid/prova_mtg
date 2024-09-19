import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UsersModule } from '../users/users.module';
import { jwtConstants } from './constants';

@Module({
  imports: [ JwtModule.registerAsync({
    global: true,
    imports: [UsersModule],
    useFactory: async(ConfigService: ConfigService) => ({
      secret: jwtConstants.secret,
      signOptions: {expiresIn: "3600"}
    }),
    inject: [ConfigService],
  }), UsersModule],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
