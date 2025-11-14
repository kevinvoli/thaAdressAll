import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Parametre } from '../entities/parametre.entity';
import { CreateParametreDto } from '../dto/create-parametre.dto';
import { UpdateParametreDto } from '../dto/update-parametre.dto';



@Injectable()
export class ParametreService {
  constructor(
    @InjectRepository(Parametre)
    private readonly ParametreRepository: Repository<Parametre>
  ){  }
  async create(createParametreDto: CreateParametreDto) {

     try {

      const newLigne= new Parametre()
     

      const ligne = await this.ParametreRepository.save(newLigne)
      return ligne
    } catch (error) {
      throw new ConflictException(error)
    }
  }

  async findAll() {
    try {
      const ligne = await this.ParametreRepository.find()
      return ligne
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async findOne(id: number) {
    try {
      const ligne = await this.ParametreRepository.findOne({
        where:{id:id}
      })
      return ligne
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async update(id: number, updateParametreDto: UpdateParametreDto) {
    try {
      const ligne = await this.ParametreRepository.findOne({
        where:{id:id}
      })
      if(!ligne) throw new NotFoundException('ligne')
      Object.assign(ligne, updateParametreDto)
      return await this.ParametreRepository.save(ligne)
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      const ligne = await this.ParametreRepository.findOne({
        where: {id}
      });
      if(!ligne) throw new NotFoundException('ligne' );
  
      await this.ParametreRepository.delete({id});
      return true
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
