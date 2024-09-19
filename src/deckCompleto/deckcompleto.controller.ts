import { Controller, Get, Param } from '@nestjs/common';
import { DeckCompletoService } from './deckcompleto.service';

@Controller('deckcompleto')
export class DeckCompletoController {
  constructor(private readonly deckCompletoService: DeckCompletoService) {}

  @Get()
  async getDeck() {
    const deck = await this.deckCompletoService.getCommanderAndDeck();
    return deck;
  }
}
