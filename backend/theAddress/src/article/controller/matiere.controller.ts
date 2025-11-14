import { MatiereService } from '../service/matiere.service';
import { CreateMatierDto } from '../dto/create-matiere.dto';
import { UpdateMatiereDto } from '../dto/Update-matiere.dto';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
 } from "@nestjs/common";
import { ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';


 
 @ApiTags('matier')
@ApiUnauthorizedResponse({description:'matier'})
@Controller('matier')
export class MatiereController {
  constructor(
    private readonly matiereService: MatiereService,
    // private readonly mediaService: MediaService
    ) {}

  @Post()
  create(@Body() createMatierDto: CreateMatierDto) {
    
    return this.matiereService.create(createMatierDto);
  }

  @Get()
  findAll() {
    return this.matiereService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matiereService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMatiereDto: UpdateMatiereDto) {
    return this.matiereService.update(+id, updateMatiereDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matiereService.remove(+id);
  }
}

