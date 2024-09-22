import { Controller, Get, Param } from '@nestjs/common';
import { ComandanteService } from './comandante.service';

@Controller('comandante')
export class ComandanteController {
  constructor(private readonly comandanteService: ComandanteService) {}

  @Get(':nomeComandante')
  async getComandante(@Param('nomeComandante') nomeComandante: string) {
    const comandanteInfo = await this.comandanteService.getComandanteInfo(nomeComandante);
    return comandanteInfo;
  }
}
