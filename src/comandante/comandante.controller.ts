<<<<<<< HEAD
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
=======
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
>>>>>>> c97005e54684d39103809c27e2c9aa6fbec032d4
