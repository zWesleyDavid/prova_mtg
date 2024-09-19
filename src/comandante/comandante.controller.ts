import { Controller, Get } from '@nestjs/common';
import { ComandanteService } from './comandante.service';

@Controller('comandante')
export class ComandanteController {
  constructor(private readonly comandanteService: ComandanteService) {}

  @Get()
  async getComandante() {
    const comandanteInfo = await this.comandanteService.getComandanteInfo();
    return comandanteInfo;
  }
}
