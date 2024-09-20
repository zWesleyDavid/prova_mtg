<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { DeckCompletoService } from './deckcompleto.service';
import { DeckCompletoController } from './deckcompleto.controller';
import { DeckSchema } from './deck.schema';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: 'Deck', schema: DeckSchema }]),
  ],
  controllers: [DeckCompletoController],
  providers: [DeckCompletoService],
})
export class DeckCompletoModule {}
=======
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { DeckCompletoService } from './deckcompleto.service';
import { DeckCompletoController } from './deckcompleto.controller';
import { DeckSchema } from './deck.schema';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: 'Deck', schema: DeckSchema }]),
  ],
  controllers: [DeckCompletoController],
  providers: [DeckCompletoService],
})
export class DeckCompletoModule {}
>>>>>>> c97005e54684d39103809c27e2c9aa6fbec032d4
