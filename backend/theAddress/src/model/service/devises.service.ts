import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Devises } from '../entities/devises.entity';
import { CreateDeviseDto } from '../dto/create-devises.dto';
import { UpdateDeviseDto } from '../dto/update-devises.dto';




@Injectable()
export class DeviseService {
  constructor(
    @InjectRepository(Devises)
    private readonly ligneRepository: Repository<Devises>
  ){  }
  async create(createDeviseDto: CreateDeviseDto) {

     try {

      const newLigne= new Devises()
      
      const ligne = await this.ligneRepository.save(newLigne)
      return ligne
    } catch (error) {
      throw new ConflictException(error)
    }
  }

  async findAll() {
    try {
      const ligne = await this.ligneRepository.find()
      return ligne
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async findOne(id: number) {
    try {
      const ligne = await this.ligneRepository.findOne({
        where:{id:id}
      })
      return ligne
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async update(id: number, updateDeviseDto: UpdateDeviseDto) {
    try {
      const ligne = await this.ligneRepository.findOne({
        where:{id:id}
      })
      if(!ligne) throw new NotFoundException('ligne')
      Object.assign(ligne, updateDeviseDto)
      return await this.ligneRepository.save(ligne)
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      const ligne = await this.ligneRepository.findOne({
        where: {id}
      });
      if(!ligne) throw new NotFoundException('ligne' );
  
      await this.ligneRepository.delete({id});
      return true
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
