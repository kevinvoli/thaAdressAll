import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateDemandeAnnulationDto } from '../dto/create-demandeAnnulation.dto';
import { DemandeAnnulationService } from '../service/demandeAnnulation.service';
import { UpdateDemandeAnnulation } from '../dto/update-demandeAnnulation.dto';
import { ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';


@ApiTags('demande annulation')
@ApiUnauthorizedResponse({description:'demande annulation'})
@Controller('demande-annulation')
export class DemandeAnnulationController {
  constructor(private readonly demandeAnnulationService: DemandeAnnulationService) {}

  @Post()
  create(@Body() createDemandeAnnulationDto: CreateDemandeAnnulationDto) {
    return this.demandeAnnulationService.create(createDemandeAnnulationDto);
  }

  @Get()
  findAll() {
    return this.demandeAnnulationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demandeAnnulationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDemandeAnnulation: UpdateDemandeAnnulation) {
    return this.demandeAnnulationService.update(+id, updateDemandeAnnulation);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demandeAnnulationService.remove(+id);
  }
}
