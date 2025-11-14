import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DemandeRetoure } from '../entities/demandeRetoure.entity';
import { CreateDemandeRetoureDto } from '../dto/create-demandeRetoure.dto';
import { UpdateDemandeRetoureDto } from '../dto/update-demandeRetoure.dto';




@Injectable()
export class DemandeRetourService {
  constructor(
    @InjectRepository(DemandeRetoure)
    private readonly demandeRetoureRepository: Repository<DemandeRetoure>
  ){  }
  async create(createDemandeRetoureDto: CreateDemandeRetoureDto) {

     try {

      const newLigne= new DemandeRetoure()
      

      const ligne = await this.demandeRetoureRepository.save(newLigne)
      return ligne
    } catch (error) {
      throw new ConflictException(error)
    }
  }

  async findAll() {
    try {
      const ligne = await this.demandeRetoureRepository.find()
      return ligne
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async findOne(id: number) {
    try {
      const ligne = await this.demandeRetoureRepository.findOne({
        where:{id:id}
      })
      return ligne
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async update(id: number, updateDemandeRetoureDto: UpdateDemandeRetoureDto) {
    try {
      const ligne = await this.demandeRetoureRepository.findOne({
        where:{id:id}
      })
      if(!ligne) throw new NotFoundException('ligne')
      Object.assign(ligne, updateDemandeRetoureDto)
      return await this.demandeRetoureRepository.save(ligne)
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      const ligne = await this.demandeRetoureRepository.findOne({
        where: {id}
      });
      if(!ligne) throw new NotFoundException('ligne' );
  
      await this.demandeRetoureRepository.delete({id});
      return true
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
