import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LivraisonService } from '../services/livraison.service';
import { CreateLivraisonDto } from '../dto/create-livraison.dto';
import { UpdateLivraisonDto } from '../dto/update-livraison.dto';



@Controller('livraison')
export class LivraisonController {
  constructor(private readonly livraisonService : LivraisonService) {}

  @Post()
  create(@Body() createLivraisonDto: CreateLivraisonDto) {
    return this.livraisonService.create(createLivraisonDto);
  }

  @Get()
  findAll() {
    return this.livraisonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.livraisonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLivraisonDto: UpdateLivraisonDto) {
    return this.livraisonService.update(+id, updateLivraisonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.livraisonService.remove(+id);
  }
}
