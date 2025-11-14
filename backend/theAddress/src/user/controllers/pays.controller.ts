import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaysService } from '../services/pays.service';
import { CreatePaysDto } from '../dto/create-pays.dto';
import { UpdatePays } from '../dto/update-pays.dto';
import { ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';



@ApiTags('pays')
@ApiUnauthorizedResponse({description:'pays'})
@Controller('pays')
export class PaysController {
  constructor(private readonly paysService: PaysService) {}

  @Post()
  create(@Body() createPaysDto: CreatePaysDto) {
    return this.paysService.create(createPaysDto);
  }

  @Get()
  findAll() {
    return this.paysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaysDto: UpdatePays) {
    return this.paysService.update(+id, updatePaysDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paysService.remove(+id);
  }
}
