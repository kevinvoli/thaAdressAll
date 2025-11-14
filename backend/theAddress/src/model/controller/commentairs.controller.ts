import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentaireService } from '../service/commentaire.service';
import { CreateCommentairsDto } from '../dto/create-commentairs.dto';
import { UpdateCommentairsDto } from '../dto/update-commentairs.dto';
import { ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';


@ApiTags('commentaires')
@ApiUnauthorizedResponse({description:' commentaire'})
@Controller('commentaire')
export class CommentaireController {
  constructor(private readonly commandeService: CommentaireService) {}

  @Post()
  create(@Body() createCommentairsDto: CreateCommentairsDto) {
    return this.commandeService.create(createCommentairsDto);
  }

  @Get()
  findAll() {
    return this.commandeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commandeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentairsDto: UpdateCommentairsDto) {
    return this.commandeService.update(+id, updateCommentairsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commandeService.remove(+id);
  }
}
