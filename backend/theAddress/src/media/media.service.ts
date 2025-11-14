import { Injectable } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';

@Injectable()
export class MediaService {


  async saveImageProduct(image: Express.Multer.File) {
   console.log("media service",image);

    return 'This action adds a new media';
  }

  async create(image: Express.Multer.File) {

    return 'this  adds a new media'

  }

  findAll() {
    return `This action returns all media`;
  }

  findOne(imagepath: string) {
    return `This action returns a #${imagepath} media`;
  }

  update(id: number, updateMediaDto: UpdateMediaDto) {
    return `This action updates a #${id} media`;
  }

  remove(id: number) {
    return `This action removes a #${id} media`;
  }
}
