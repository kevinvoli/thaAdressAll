import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Modules } from '../entities/module.entity';
import { CreateModuleDto } from '../dto/create-module.dto';
import { UpdateModuleDto } from '../dto/update-module.dto';



@Injectable()
export class ModuleService {
  constructor(
    @InjectRepository(Modules)
    private readonly modulesRepository: Repository<Modules>
  ){  }
  async create(createModuleDto: CreateModuleDto) {

     try {

      const newLigne= new Modules()
 

      const ligne = await this.modulesRepository.save(newLigne)
      return ligne
    } catch (error) {
      throw new ConflictException(error)
    }
  }

  async findAll() {
    try {
      const ligne = await this.modulesRepository.find()
      return ligne
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async findOne(id: number) {
    try {
      const ligne = await this.modulesRepository.findOne({
        where:{id:id}
      })
      return ligne
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async update(id: number, updateModuleDto: UpdateModuleDto) {
    try {
      const ligne = await this.modulesRepository.findOne({
        where:{id:id}
      })
      if(!ligne) throw new NotFoundException('ligne')
      Object.assign(ligne, updateModuleDto)
      return await this.modulesRepository.save(ligne)
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      const ligne = await this.modulesRepository.findOne({
        where: {id}
      });
      if(!ligne) throw new NotFoundException('ligne' );
  
      await this.modulesRepository.delete({id});
      return true
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
