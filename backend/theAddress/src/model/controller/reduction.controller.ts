import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReductionService } from '../service/reduction.service';
import { UpdateReductionDto } from '../dto/update-reduction.dto';
import { CreateReductionDto } from '../dto/create-reduction.dto';
import { ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';


@ApiTags('reduction')
@ApiUnauthorizedResponse({description:'reduction'})
@Controller('reduction')
export class ReductionController {
  constructor(private readonly reductionService: ReductionService) {}

  @Post()
  create(@Body() createReductionDto: CreateReductionDto) {
    return this.reductionService.create(createReductionDto);
  }

  @Get()
  findAll() {
    return this.reductionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reductionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReductionDto: UpdateReductionDto) {
    return this.reductionService.update(+id, updateReductionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reductionService.remove(+id);
  }
}
