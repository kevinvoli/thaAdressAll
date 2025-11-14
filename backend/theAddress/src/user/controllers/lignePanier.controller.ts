import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LignePanierService } from '../services/lignePanier.service';
import { CreateLignePanierDto } from '../dto/create-lignePanier.dto';
import { UpdateLignePanierDto } from '../dto/update-ligne.dto';
import { ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';


@ApiTags('line panier')
@ApiUnauthorizedResponse({description:'line panier'})
@Controller('line-panier')
export class LignePanierController {
  constructor(private readonly lignePanierService: LignePanierService) {}

  @Post()
  create(@Body() createLignePanierDto: CreateLignePanierDto) {
    return this.lignePanierService.create(createLignePanierDto );
  }

  @Get()
  findAll() {
    return this.lignePanierService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lignePanierService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommandeDto: UpdateLignePanierDto) {
    return this.lignePanierService.update(+id, updateCommandeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lignePanierService.remove(+id);
  }
}
