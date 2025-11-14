import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ModuleService } from '../service/module.service';
import { CreateModuleDto } from '../dto/create-module.dto';
import { UpdateModuleDto } from '../dto/update-module.dto';
import { ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';



@ApiTags('modules')
@ApiUnauthorizedResponse({description:'modules'})
@Controller('modules')
export class ModuleController {
  constructor(private readonly ModuleService: ModuleService) {}

  @Post()
  create(@Body() createModuleDto: CreateModuleDto) {
    return this.ModuleService.create(createModuleDto);
  }

  @Get()
  findAll() {
    return this.ModuleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ModuleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModuleDto: UpdateModuleDto) {
    return this.ModuleService.update(+id, updateModuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ModuleService.remove(+id);
  }
}
