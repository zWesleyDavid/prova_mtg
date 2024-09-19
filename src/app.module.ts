import { Module } from '@nestjs/common';
import { ComandanteModule } from './comandante/comandante.module';
import { deckModule } from './deck/deck.module';
import { DeckCompletoModule } from './deckCompleto/deckcompleto.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/roles/roles.guard';

@Module({
  imports: [
    ComandanteModule,
    deckModule,
    MongooseModule.forRoot('mongodb://localhost:27017/MTG'),
    DeckCompletoModule,
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({isGlobal: true}),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule { }
