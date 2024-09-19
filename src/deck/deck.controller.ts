import { Controller, Get } from "@nestjs/common";
import { deckService } from "./deck.service";

@Controller('deck')
export class deckController{
    constructor(private readonly deckService: deckService){}

    @Get()
    async getDeck(){
        const deck = await this.deckService.getDeck();
        return deck;
    }
}