
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
 } from "@nestjs/common";
import { ColorsService } from '../service/colors.service';
import { CreateColorsDto } from '../dto/create-color.dto';
import { UpdateColorsDto } from '../dto/update-color.dto';
import { ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";


@ApiTags('colors')
@ApiUnauthorizedResponse({description:'approvisionnement'})
@Controller('colors')
export class ColorsController {
  constructor(
    private readonly colorsService: ColorsService,
    // private readonly mediaService: MediaService
    ) {}

  @Post()
  create(@Body() createColorsDto: CreateColorsDto) {
    
    return this.colorsService.create(createColorsDto);
  }

  @Get()
  findAll() {
    return this.colorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.colorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColorsDto: UpdateColorsDto) {
    return this.colorsService.update(+id, updateColorsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.colorsService.remove(+id);
  }
}

