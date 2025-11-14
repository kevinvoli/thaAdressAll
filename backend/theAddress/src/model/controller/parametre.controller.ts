import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParametreService } from '../service/parametre.service';
import { UpdateParametreDto } from '../dto/update-parametre.dto';
import { CreateParametreDto } from '../dto/create-parametre.dto';
import { ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';



@ApiTags('parametre')
@ApiUnauthorizedResponse({description:'parametre'})
@Controller('parametre')
export class ParametreController {
  constructor(private readonly parametreService: ParametreService) {}

  @Post()
  create(@Body() createParametreDto: CreateParametreDto) {
    return this.parametreService.create(createParametreDto);
  }

  @Get()
  findAll() {
    return this.parametreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parametreService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParametreDto: UpdateParametreDto) {
    return this.parametreService.update(+id, updateParametreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parametreService.remove(+id);
  }
}
