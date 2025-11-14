
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
 } from "@nestjs/common";
import { ImageProduit } from "../entities/produitImage.entity";
import { ImageProduitService } from '../service/imageProduit.service';
import { CreateImageProduitDto } from '../dto/create-imageProduit.dto';
import { UpdateImageProduitDto } from '../dto/Update-imageProduit.dto';
import { ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";

@ApiTags('approvisionnement')
@ApiUnauthorizedResponse({description:'route des image du produit'})
@Controller('image-produits')
export class ImageProduitController {
  constructor(
    private readonly imageProduitService: ImageProduitService,
    // private readonly mediaService: MediaService
    ) {}

  @Post()
  create(@Body() createImageProduitDto: CreateImageProduitDto) {
    
    return this.imageProduitService.create(createImageProduitDto);
  }

  @Get()
  findAll() {
    return this.imageProduitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imageProduitService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImageProduitDto: UpdateImageProduitDto) {
    return this.imageProduitService.update(+id, updateImageProduitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imageProduitService.remove(+id);
  }
}

