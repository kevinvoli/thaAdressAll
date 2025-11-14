import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';


import { Repository } from 'typeorm';
import { Colors } from '../entities/colors.entity';
import { CreateColorsDto } from '../dto/create-color.dto';
import { UpdateColorsDto } from '../dto/update-color.dto';

@Injectable()
export class ColorsService {

  constructor(
    @InjectRepository(Colors)
    private readonly colorsRepository: Repository<Colors>
  ){

  }


  async create(createColorsDto:CreateColorsDto) {
    try {

      const newColors= new Colors()
      newColors.name= createColorsDto.name
      newColors.slug= createColorsDto.slug
      newColors.colorvalue= createColorsDto.colorvalue;
      

      const colors = await this.colorsRepository.save(newColors)
      return colors
    } catch (error) {
      throw new ConflictException(error)
    }
  }

  async findAll() {

    try {
      const colors = await this.colorsRepository.find()
      return colors
    } catch (error) {
      throw new NotFoundException(error)
    }
   
  }

  async findOne(id: number) {
    try {
      const colors = await this.colorsRepository.findOne({
        where:{id:id}
      })
      return colors
    } catch (error) {
      throw new NotFoundException(error)
    }
   
  }

  async update(id: number, updateColorsDto: UpdateColorsDto) {

    try {
      const colors = await this.colorsRepository.findOne({
        where:{id:id}
      })
      if(!colors) throw new NotFoundException('categorie')
      Object.assign(colors, updateColorsDto)
      return await this.colorsRepository.save(colors)
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      const colors = await this.colorsRepository.findOne({
        where: {id}
      });
      if(!colors) throw new NotFoundException('user' );
  
      await this.colorsRepository.delete({id});
      return true
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
