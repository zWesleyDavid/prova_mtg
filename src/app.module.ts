import { Module } from '@nestjs/common';
import { ComandanteModule } from './comandante/comandante.module';
import { DeckCompletoModule } from './deckCompleto/deckcompleto.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/roles/roles.guard';

@Module({
  imports: [
    ComandanteModule,
    MongooseModule.forRoot('mongodb://localhost:27017/MTG'),
    DeckCompletoModule,
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({isGlobal: true}),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule { }
