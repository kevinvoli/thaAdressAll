import { CategorieService } from '../service/categorie.service';
import { UpdateCategorieDto } from '../dto/update-categorie.dto';
import { CreateCategorieDto } from '../dto/create-categorie.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
 } from "@nestjs/common";
import { ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';

 
 @ApiTags('categorie')
@ApiUnauthorizedResponse({description:'route des categorie'})
@Controller('categorie')
export class CategorieController {
  constructor(
    private readonly categorieservice: CategorieService,
    // private readonly mediaService: MediaService
    ) {}

  @Post()
  create(@Body() createCategorieDto: CreateCategorieDto) {
    
    return this.categorieservice.create(createCategorieDto);
  }

  @Get()
  findAll() {
    return this.categorieservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categorieservice.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateCategorieDto) {
    return this.categorieservice.update(+id, updateArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categorieservice.remove(+id);
  }
}

