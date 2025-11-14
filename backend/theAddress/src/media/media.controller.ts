import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseInterceptors, UploadedFile } from '@nestjs/common';
import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { ApiBody, ApiConsumes, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';


@ApiTags('medias')
@ApiUnauthorizedResponse({description:'medias'})
@Controller('medias')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post()
  @Post('upload')
  @UseInterceptors(FileInterceptor('image')) // 👈 field name must match
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: { // 👈 this property
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  create(@UploadedFile() image: Express.Multer.File, @Body()data ) {
    console.log(image);
    
    return this.mediaService.create(image);
  }

  @Get()
  findAll() {
    return this.mediaService.findAll();
  }

  @Get(':imgpath')
  findOne(@Param('imgpath') image: string,@Res()res) {
    return this.mediaService.findOne(image);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMediaDto: UpdateMediaDto) {
    return this.mediaService.update(+id, updateMediaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mediaService.remove(+id);
  }
}
