import { Module } from '@nestjs/common';
import { ComandanteController } from './comandante.controller';
import { ComandanteService } from './comandante.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    controllers: [ComandanteController],
    providers: [ComandanteService],
    exports: [ComandanteService],
})

export class ComandanteModule {}
