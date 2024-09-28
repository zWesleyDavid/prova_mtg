import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
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
  @UseGuards(AuthGuard) 
  @Post(':comandante/edit') 
  async editDeck(@Param('comandante') comandante: string, @Body() deckData: any) {
 
    return this.deckCompletoService.editDeck(comandante, deckData);
  }

  @UseGuards(AuthGuard) 
  @Delete(':comandante/delete') 
  async deleteDeck(@Param('comandante') comandante: string) {
    
    return this.deckCompletoService.deleteDeck(comandante);
  }
}
