<<<<<<< HEAD
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
=======
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
>>>>>>> c97005e54684d39103809c27e2c9aa6fbec032d4
