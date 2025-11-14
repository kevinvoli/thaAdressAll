import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddressFactService } from '../services/addressFact.service';
import { CreateAdressFactDto } from '../dto/Create-addressFact.dto';
import { UpdateAddressFactDto } from '../dto/update-addressFact.dto';
import { ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';


@ApiTags('address facturation')
@ApiUnauthorizedResponse({description:'address facturation'})
@Controller('address-facturation')
export class AddressFactController {
  constructor(private readonly addressFactService: AddressFactService) {}

  @Post()
  async create(@Body() createAdressFactDto: CreateAdressFactDto,id:number) {
    return this.addressFactService.create(createAdressFactDto,id);
  }

  @Get()
  async findAll() {
    return this.addressFactService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.addressFactService.findOne(+id);
  }

  @Get('user/:id')
  async findByUser(@Param('id') id: string) {
    return this.addressFactService.findByUser(+id);
  }

  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddressFactDto: UpdateAddressFactDto) {
    return this.addressFactService.update(+id, updateAddressFactDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressFactService.remove(+id);
  }
}