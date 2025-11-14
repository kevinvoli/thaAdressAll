import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Atribut } from '../entities/Atribut.entity';
import { UpdateAtributDto } from '../dto/update-atribut.dto';
import { CreateatributDto } from '../dto/create-atribut.dto';



@Injectable()
export class AttributService {
  constructor(
    @InjectRepository(Atribut)
    private readonly attributRepository: Repository<Atribut>
  ){  }
  async create(createatributDto: CreateatributDto) {

     try {

      const newLigne= new Atribut()
      

      const ligne = await this.attributRepository.save(newLigne)
      return ligne
    } catch (error) {
      throw new ConflictException(error)
    }
  }

  async findAll() {
    try {
      const ligne = await this.attributRepository.find()
      return ligne
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async findOne(id: number) {
    try {
      const ligne = await this.attributRepository.findOne({
        where:{id:id}
      })
      return ligne
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async update(id: number, updateAtributDto: UpdateAtributDto) {
    try {
      const ligne = await this.attributRepository.findOne({
        where:{id:id}
      })
      if(!ligne) throw new NotFoundException('ligne')
      Object.assign(ligne, updateAtributDto)
      return await this.attributRepository.save(ligne)
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      const ligne = await this.attributRepository.findOne({
        where: {id}
      });
      if(!ligne) throw new NotFoundException('ligne' );
  
      await this.attributRepository.delete({id});
      return true
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
