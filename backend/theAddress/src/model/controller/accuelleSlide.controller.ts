import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccueilleSlade } from '../entities/accueilleSlide.entity';
import { AccueillSlideService } from '../service/accueilleSlide.service';
import { CreateAccueilleSlideDto } from '../dto/create-accueilleSlide.dto';
import { UpdateAccueilleSlideDto } from '../dto/update-accueilleSlide.dto';
import { ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';



@ApiTags('accueille Slides')
@ApiUnauthorizedResponse({description:'accueille Slides'})
@Controller('accueille-slides')
export class AccueilleSladeController {
  constructor(private readonly accueillSlideService: AccueillSlideService) {}

  @Post()
  create(@Body() createAccueilleSlideDto: CreateAccueilleSlideDto) {
    return this.accueillSlideService.create(createAccueilleSlideDto);
  }

  @Get()
  findAll() {
    return this.accueillSlideService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accueillSlideService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccueilleSlideDto: UpdateAccueilleSlideDto) {
    return this.accueillSlideService.update(+id, updateAccueilleSlideDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accueillSlideService.remove(+id);
  }
}
