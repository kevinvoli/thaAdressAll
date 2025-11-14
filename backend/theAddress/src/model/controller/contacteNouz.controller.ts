import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContacteNousService } from '../service/contactezNous.service';
import { UpdateContactezNousDto } from '../dto/update-contactezNouz.dto';
import { CreateContactezNousDto } from '../dto/create-contactezNouz.dto';
import { ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';

@ApiTags('Contact')
@ApiUnauthorizedResponse({description:'contacter'})
@Controller('contact')
export class ContacteNousController {
  constructor(private readonly contacteNousService: ContacteNousService) {}

  @Post()
  create(@Body() createContactezNousDto: CreateContactezNousDto) {
    return this.contacteNousService.create(createContactezNousDto);
  }

  @Get()
  findAll() {
    return this.contacteNousService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contacteNousService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContactezNousDto: UpdateContactezNousDto) {
    return this.contacteNousService.update(+id, updateContactezNousDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contacteNousService.remove(+id);
  }
}
