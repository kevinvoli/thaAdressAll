import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommandePaiementService } from '../services/commandePaiement.service';
import { CreateCommandePaiement } from '../dto/create-commandePaiement.dto';
import { UpdateCommandePaiement } from '../dto/update-commandepaiement.dto';



@Controller('commande-paiements')
export class CommandePaiemantController {
  constructor(private readonly commandePaiementService : CommandePaiementService) {}

  @Post()
  create(@Body() createCommandePaiement: CreateCommandePaiement) {
    return this.commandePaiementService.create(createCommandePaiement);
  }

  @Get()
  findAll() {
    return this.commandePaiementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commandePaiementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommandePaiement: UpdateCommandePaiement) {
    return this.commandePaiementService.update(+id, updateCommandePaiement);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commandePaiementService.remove(+id);
  }
}
