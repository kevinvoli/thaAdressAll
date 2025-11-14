import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CodePostalService } from '../services/condePostal.service';
import { CreateCodePostalDto } from '../dto/create-codePostal..dto';
import { UpdateCodePostal } from '../dto/update-codePostal.dto';
import { ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';



@ApiTags('code postal')
@ApiUnauthorizedResponse({description:'code postal'})
@Controller('code-postal')
export class CodePostalController {
  constructor(private readonly codePostalService: CodePostalService) {}

  @Post()
  create(@Body() createCodePostalDto: CreateCodePostalDto) {
    return this.codePostalService.create(createCodePostalDto);
  }

  @Get()
  findAll() {
    return this.codePostalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.codePostalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCodePostal: UpdateCodePostal) {
    return this.codePostalService.update(+id, updateCodePostal);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.codePostalService.remove(+id);
  }
}
