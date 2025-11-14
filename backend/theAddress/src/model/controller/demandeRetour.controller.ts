import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DemandeRetourService } from '../service/demandeRetoure.service';
import { CreateDemandeRetoureDto } from '../dto/create-demandeRetoure.dto';
import { UpdateDemandeRetoureDto } from '../dto/update-demandeRetoure.dto';
import { ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';


@ApiTags('demande retoure')
@ApiUnauthorizedResponse({description:'demande retoure'})
@Controller('demande-retoure')
export class DemandeRetourController {
  constructor(private readonly demandeRetourService: DemandeRetourService) {}

  @Post()
  create(@Body() createDemandeRetoureDto: CreateDemandeRetoureDto) {
    return this.demandeRetourService.create(createDemandeRetoureDto);
  }

  @Get()
  findAll() {
    return this.demandeRetourService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demandeRetourService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommandeDto: UpdateDemandeRetoureDto) {
    return this.demandeRetourService.update(+id, updateCommandeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demandeRetourService.remove(+id);
  }
}
