import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarteCadeau } from '../entities/carteCadeau.entiy';
import { CreateCarteCadeauDto } from '../dto/create-carteCadeau.dto';
import { UpdateCarteCadeauDto } from '../dto/update-carteCadeau.dto';
import { CarteCadeauService } from '../service/carteCadeau.service';
import { ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';

@ApiTags('carte cadeau')
@ApiUnauthorizedResponse({description:'carte cadeau'})
@Controller('carte-cadeau')
export class CarteCadeauController {
  constructor(private readonly carteCadeauService: CarteCadeauService) {}

  @Post()
  create(@Body() createCarteCadeauDto: CreateCarteCadeauDto) {
    return this.carteCadeauService.create(createCarteCadeauDto);
  }

  @Get()
  findAll() {
    return this.carteCadeauService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carteCadeauService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarteCadeauDto: UpdateCarteCadeauDto) {
    return this.carteCadeauService.update(+id, updateCarteCadeauDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carteCadeauService.remove(+id);
  }
}
