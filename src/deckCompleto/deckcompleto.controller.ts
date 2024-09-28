import { Controller, Get, Param } from '@nestjs/common';
import { DeckCompletoService } from './deckcompleto.service';

@Controller('deckcompleto')
export class DeckCompletoController {
  constructor(private readonly deckCompletoService: DeckCompletoService) {}

  @Get(':comandante')
  async getDeck(@Param('comandante') comandante: string) {
    const deck = await this.deckCompletoService.getCommanderAndDeck(comandante);
    return deck;
  }
}
