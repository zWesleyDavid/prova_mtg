import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { DeckCompletoService } from './deckcompleto.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('deckcompleto')
export class DeckCompletoController {
  constructor(private readonly deckCompletoService: DeckCompletoService) {}


  @Get(':comandante')
  async getDeck(@Param('comandante') comandante: string) {
    const deck = await this.deckCompletoService.getCommanderAndDeck(comandante);
    return deck;
  }
}
