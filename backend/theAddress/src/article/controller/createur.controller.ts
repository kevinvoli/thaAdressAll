
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
 } from "@nestjs/common";

import { CreateurService } from '../service/createur.service';
import { CreateCreateurDto } from '../dto/create-createur.dto';
import { UpdateCreateurDto } from '../dto/update-createur.dto';
import { ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";


@ApiTags('Createur')
@ApiUnauthorizedResponse({description:'approvisionnement'})
@Controller('createur')
export class CreateurCrontroller {
  constructor(
    private readonly createurService: CreateurService,
    // private readonly mediaService: MediaService
    ) {}

  @Post()
  create(@Body() createCreateurDto: CreateCreateurDto) {
    
    return this.createurService.create(createCreateurDto);
  }

  @Get()
  findAll() {
    return this.createurService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.createurService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCreateurDto: UpdateCreateurDto) {
    return this.createurService.update(+id, updateCreateurDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.createurService.remove(+id);
  }
}

