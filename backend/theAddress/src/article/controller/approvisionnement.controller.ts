import { Approvisionnement } from '../entities/approvisionnement.entity';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
 } from "@nestjs/common";
import { ApprovisionnementService } from '../service/approvisionnement.service';
import { CreateApprovisonnementDto } from '../dto/create-approvisionnement.dto';
import { UpdateApprovisionnementDto } from '../dto/Update-approvisionnement.dto';
import { ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';


@ApiTags('approvisionnement')
@ApiUnauthorizedResponse({description:'approvisionnement'})
@Controller('approvisionnement')
export class ApprovisionnementController {
  constructor(
    private readonly spprovisionnementService: ApprovisionnementService,
    // private readonly mediaService: MediaService
    ) {}

  @Post()
  create(@Body() createApprovisonnementDto: CreateApprovisonnementDto) {
    
    return this.spprovisionnementService.create(createApprovisonnementDto);
  }

  @Get()
  findAll() {
    return this.spprovisionnementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spprovisionnementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApprovisionnementDto: UpdateApprovisionnementDto) {
    return this.spprovisionnementService.update(+id, updateApprovisionnementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spprovisionnementService.remove(+id);
  }
}

