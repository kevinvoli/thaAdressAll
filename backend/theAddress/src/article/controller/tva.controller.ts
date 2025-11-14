import { TvaService } from '../service/tva.service';
import { CreateTvaDto } from '../dto/create-tva.tdo';
import { UpdateTvaDto } from '../dto/update-tva.dto';

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


 @ApiTags('Tva')
@ApiUnauthorizedResponse({description:'tva'})
@Controller('tva')
export class TvaController {
  constructor(
    private readonly tvaServcie: TvaService,
    // private readonly mediaService: MediaService
    ) {}

  @Post()
  create(@Body() createTvaDto: CreateTvaDto) {
    
    return this.tvaServcie.create(createTvaDto);
  }

  @Get()
  findAll() {
    return this.tvaServcie.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tvaServcie.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTvaDto: UpdateTvaDto) {
    return this.tvaServcie.update(+id, updateTvaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tvaServcie.remove(+id);
  }
}

