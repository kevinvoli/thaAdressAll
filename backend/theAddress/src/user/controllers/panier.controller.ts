import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { PanierService } from '../services/panier.service';
import { CreatePanierDto } from '../dto/create-panier.dto';
import { UpdatePanierDto } from '../dto/update-panier.dto';
import { ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';



@ApiTags('paniers')
@ApiUnauthorizedResponse({description:'panier'})
@Controller('panier')
export class PanierController {
  constructor(private readonly panierService: PanierService) {}

  @Post()
  create(@Body() createPanierDto: CreatePanierDto) {
    return this.panierService.create(createPanierDto);
  }

  @Get()
  findAll() {
    return this.panierService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.panierService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommandeDto: UpdatePanierDto) {
    return this.panierService.update(+id, updateCommandeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.panierService.remove(+id);
  }
}
