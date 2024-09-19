import { Module } from '@nestjs/common';
import { deckController } from './deck.controller';
import { deckService } from './deck.service';
import { HttpModule } from '@nestjs/axios';
import { ComandanteModule } from '../comandante/comandante.module';

@Module({
    imports: [HttpModule, ComandanteModule],
    controllers: [deckController],
    providers: [deckService],
})

export class deckModule {}
