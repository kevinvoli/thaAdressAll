import { Formataille } from '../entities/formataille.entity';
import { FormatailleService } from '../service/formataille.service';
import { CreateFormatailleDto } from '../dto/create-formataille.dto';
import { UpdateFormatailleDto } from '../dto/Update-formataille.dto';

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



 @ApiTags('formataille')
@ApiUnauthorizedResponse({description:'approvisionnement'})
@Controller('formataille')
export class FormatailleCrontoller {
  constructor(
    private readonly FromatailleService: FormatailleService,
    // private readonly mediaService: MediaService
    ) {}

  @Post()
  create(@Body() createFormatailleDto: CreateFormatailleDto) {
    
    return this.FromatailleService.create(createFormatailleDto);
  }

  @Get()
  findAll() {
    return this.FromatailleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.FromatailleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFormatailleDto: UpdateFormatailleDto) {
    return this.FromatailleService.update(+id, updateFormatailleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.FromatailleService.remove(+id);
  }
}

