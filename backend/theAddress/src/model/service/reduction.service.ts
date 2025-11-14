import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reduction } from '../entities/reduction.entity';
import { CreateReductionDto } from '../dto/create-reduction.dto';
import { UpdateReductionDto } from '../dto/update-reduction.dto';




@Injectable()
export class ReductionService {
  constructor(
    @InjectRepository(Reduction)
    private readonly reductionRepository: Repository<Reduction>
  ){  }
  async create(createReductionDto: CreateReductionDto) {

     try {

      const newLigne= new Reduction()

      const ligne = await this.reductionRepository.save(newLigne)
      return ligne
    } catch (error) {
      throw new ConflictException(error)
    }
  }

  async findAll() {
    try {
      const ligne = await this.reductionRepository.find()
      return ligne
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async findOne(id: number) {
    try {
      const ligne = await this.reductionRepository.findOne({
        where:{id:id}
      })
      return ligne
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async update(id: number, updateReductionDto: UpdateReductionDto) {
    try {
      const ligne = await this.reductionRepository.findOne({
        where:{id:id}
      })
      if(!ligne) throw new NotFoundException('ligne')
      Object.assign(ligne, updateReductionDto)
      return await this.reductionRepository.save(ligne)
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      const ligne = await this.reductionRepository.findOne({
        where: {id}
      });
      if(!ligne) throw new NotFoundException('ligne' );
  
      await this.reductionRepository.delete({id});
      return true
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
