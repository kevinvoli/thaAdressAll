import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateStatusCommandeDto } from '../dto/create-statusCommande.dto';
import { UpdateStatusComande } from '../dto/update-statusCommande.dto';
import { StatusCommandeService } from '../services/statusCommande.service';



@Controller('status-commande')
export class StatusCommandeController {
  constructor(private readonly statusCommandeService : StatusCommandeService) {}

  @Post()
  create(@Body() CreateStatusCommandeDto: CreateStatusCommandeDto) {
    return this.statusCommandeService.create(CreateStatusCommandeDto);
  }

  @Get()
  findAll() {
    return this.statusCommandeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statusCommandeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStatusComande: UpdateStatusComande) {
    return this.statusCommandeService.update(+id, updateStatusComande);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statusCommandeService.remove(+id);
  }
}
