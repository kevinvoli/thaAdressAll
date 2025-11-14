import { CategorieService } from '../service/categorie.service';
import { UpdateCategorieDto } from '../dto/update-categorie.dto';
import { CreateCategorieDto } from '../dto/create-categorie.dto';
import { CreateProduitDto } from '../dto/create-produit.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
 } from "@nestjs/common";
import { ProduitService } from '../service/produit.service';
import { ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';



@ApiTags('produit')
@ApiUnauthorizedResponse({description:'produit'})
@Controller('produit')
export class ProduitController {
  constructor(
    private readonly produitService: ProduitService,
    // private readonly mediaService: MediaService
    ) {}

  @Post()
  create(@Body() createProduitDto: CreateProduitDto) {
    
    return this.produitService.create(createProduitDto);
  }

  @Get()
  findAll() {
    return this.produitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produitService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() createProduitDto: UpdateCategorieDto) {
    return this.produitService.update(+id, createProduitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produitService.remove(+id);
  }
}

