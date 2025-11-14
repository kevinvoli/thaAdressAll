import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ville } from '../entities/ville.entity';
import { CreateVilleDto } from '../dto/create-ville.dto';
import { UpdateVilleDto } from '../dto/update-ville.dto';

@Injectable()
export class VilleService {
  constructor(
    @InjectRepository(Ville)
    private readonly villeRepository: Repository<Ville>
  ){  }
  async create(createVilleDto: CreateVilleDto) {

     try {

      const newLigne= new Ville()

      const ville = await this.villeRepository.save(newLigne)
      return ville
    } catch (error) {
      throw new ConflictException(error)
    }
  }

  async findAll() {
    try {
      const ville = await this.villeRepository.find()
      return ville
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async findOne(id: number) {
    try {
      const ville = await this.villeRepository.findOne({
        where:{id:id}
      })
      return ville
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async update(id: number, updateVilleDto: UpdateVilleDto) {
    try {
      const ville = await this.villeRepository.findOne({
        where:{id:id}
      })
      if(!ville) throw new NotFoundException('ville')
      Object.assign(ville, updateVilleDto)
      return await this.villeRepository.save(ville)
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      const ville = await this.villeRepository.findOne({
        where: {id}
      });
      if(!ville) throw new NotFoundException('ville' );
  
      await this.villeRepository.delete({id});
      return true
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
