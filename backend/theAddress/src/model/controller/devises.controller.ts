import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeviseService } from '../service/devises.service';
import { CreateDeviseDto } from '../dto/create-devises.dto';
import { UpdateDeviseDto } from '../dto/update-devises.dto';
import { ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';


@ApiTags('devises')
@ApiUnauthorizedResponse({description:'devises'})
@Controller('devises')
export class DeviseController {
  constructor(private readonly deviseServiceService: DeviseService) {}

  @Post()
  create(@Body() createDeviseDto: CreateDeviseDto) {
    return this.deviseServiceService.create(createDeviseDto);
  }

  @Get()
  findAll() {
    return this.deviseServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deviseServiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeviseDto: UpdateDeviseDto) {
    return this.deviseServiceService.update(+id, updateDeviseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deviseServiceService.remove(+id);
  }
}
