import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Createur } from '../entities/createur.entity';
import { CreateCreateurDto } from '../dto/create-createur.dto';
import { UpdateCreateurDto } from '../dto/update-createur.dto';


@Injectable()
export class CreateurService {

  constructor(
    @InjectRepository(Createur)
    private readonly createurRepository: Repository<Createur>
  ){

  }


  async create(createCreateurDto:CreateCreateurDto) {
    try {

      const newCreateur= new Createur()
      newCreateur.name= createCreateurDto.name
      newCreateur.slug= createCreateurDto.slug
      newCreateur.website= createCreateurDto.website
      newCreateur.logo= createCreateurDto.logo

      const createur = await this.createurRepository.save(newCreateur)
      return createur
    } catch (error) {
      throw new ConflictException(error)
    }
  }

  async findAll() {

    try {
      const createur = await this.createurRepository.find()
      return createur
    } catch (error) {
      throw new NotFoundException(error)
    }
   
  }

  async findOne(id: number) {
    try {
      const createur = await this.createurRepository.findOne({
        where:{id:id}
      })
      return createur
    } catch (error) {
      throw new NotFoundException(error)
    }
   
  }

  async update(id: number, updateCreateur: UpdateCreateurDto) {
    try {
      const createur = await this.createurRepository.findOne({
        where:{id:id}
      })
      if(!createur) throw new NotFoundException('createur')
      Object.assign(createur, updateCreateur)
      return await this.createurRepository.save(createur)
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      const createur = await this.createurRepository.findOne({
        where: {id}
      });
      if(!createur) throw new NotFoundException('user' );
  
      await this.createurRepository.delete({id});
      return true
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
