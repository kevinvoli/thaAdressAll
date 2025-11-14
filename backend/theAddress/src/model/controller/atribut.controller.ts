import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AttributService } from '../service/atribut.service';
import { CreateatributDto } from '../dto/create-atribut.dto';
import { UpdateAtributDto } from '../dto/update-atribut.dto';
import { ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';





@ApiTags('Attributs')
@ApiUnauthorizedResponse({description:' attribut'})
@Controller('attributs')
export class AttributCoOntroller {
  constructor(private readonly attributService: AttributService) {}

  @Post()
  create(@Body() createatributDto: CreateatributDto) {
    return this.attributService.create(createatributDto);
  }

  @Get()
  findAll() {
    return this.attributService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attributService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAtributDto: UpdateAtributDto) {
    return this.attributService.update(+id, updateAtributDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attributService.remove(+id);
  }
}
