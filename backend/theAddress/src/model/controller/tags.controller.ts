import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TagsService } from '../service/tag.service';
import { UpdateTagsDto } from '../dto/update-tags.dto';
import { CreateTagsDto } from '../dto/create-tags.dto';
import { ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';


@ApiTags('Tags')
@ApiUnauthorizedResponse({description:'Tags'})
@Controller('tags')
export class TagsController {
  constructor(private readonly TagsService: TagsService) {}

  @Post()
  create(@Body() createTagsDto: CreateTagsDto) {
    return this.TagsService.create(createTagsDto);
  }

  @Get()
  findAll() {
    return this.TagsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.TagsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTagsDto: UpdateTagsDto) {
    return this.TagsService.update(+id, updateTagsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.TagsService.remove(+id);
  }
}
