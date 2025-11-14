import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Formataille } from '../entities/formataille.entity';
import { CreateFormatailleDto } from '../dto/create-formataille.dto';
import { UpdateFormatailleDto } from '../dto/Update-formataille.dto';



@Injectable()
export class FormatailleService {

  constructor(
    @InjectRepository(Formataille)
    private readonly formatailleRepository: Repository<Formataille>
  ){

  }


  async create(createFormatailleDto:CreateFormatailleDto) {
    try {

      const newFormataile= new Formataille()
      newFormataile.name= createFormatailleDto.name
      newFormataile.slug= createFormatailleDto.slug
      newFormataile.ordre=createFormatailleDto.ordre
      newFormataile.language= createFormatailleDto.language

      const formataille = await this.formatailleRepository.save(newFormataile)
      return formataille
    } catch (error) {
      throw new ConflictException(error)
    }
  }

  async findAll() {

    try {
      const formataille = await this.formatailleRepository.find()
      return formataille
    } catch (error) {
      throw new NotFoundException(error)
    }
   
  }

  async findOne(id: number) {
    try {
      const formataille = await this.formatailleRepository.findOne({
        where:{id:id}
      })
      return formataille
    } catch (error) {
      throw new NotFoundException(error)
    }
   
  }

  async update(id: number, updateFormatailleDto: UpdateFormatailleDto) {
    try {
      const formataille = await this.formatailleRepository.findOne({
        where:{id:id}
      })
      if(!formataille) throw new NotFoundException('createur')
      Object.assign(formataille, updateFormatailleDto)
      return await this.formatailleRepository.save(formataille)
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      const formataille = await this.formatailleRepository.findOne({
        where: {id}
      });
      if(!formataille) throw new NotFoundException('user' );
  
      await this.formatailleRepository.delete({id});
      return true
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
