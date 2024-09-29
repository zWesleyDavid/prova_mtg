import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { DeckCompletoService } from './deckcompleto.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/auth/roles/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/roles/roles.guard';
import { Role } from 'src/auth/roles/enums/roles.enum';
import { Request } from 'express';

@Controller('deckcompleto')
export class DeckCompletoController {
  constructor(private readonly deckCompletoService: DeckCompletoService) { }


  @Get(':comandante')
  async getDeck(@Param('comandante') comandante: string) {
    const deck = await this.deckCompletoService.getCommanderAndDeck(comandante);
    return deck;
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Admin) 
  @Get('/admin/all')
  async getAllDecks() {
    const decks = await this.deckCompletoService.getAllDecks();
    return decks;
  }

}
