import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LigneService } from '../services/ligne.service';
import { CreateLigneDto } from '../dto/create-ligne.dto';
import { UpdateLigneDto } from '../dto/update-ligne.dto';


@Controller('ligne')
export class LigneController {
  constructor(private readonly ligneService : LigneService) {}

  @Post()
  create(@Body() createLigneDto: CreateLigneDto) {
    return this.ligneService.create(createLigneDto);
  }

  @Get()
  findAll() {
    return this.ligneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ligneService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLigneDto: UpdateLigneDto) {
    return this.ligneService.update(+id, updateLigneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ligneService.remove(+id);
  }
}
