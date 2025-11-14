import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DemandeAnnulation } from '../entities/demandeAnnulation.entity';
import { CreateDemandeAnnulationDto } from '../dto/create-demandeAnnulation.dto';
import { UpdateDemandeAnnulation } from '../dto/update-demandeAnnulation.dto';




@Injectable()
export class DemandeAnnulationService {
  constructor(
    @InjectRepository(DemandeAnnulation)
    private readonly demandeAnnulationRepository: Repository<DemandeAnnulation>
  ){  }
  async create(createDemandeAnnulationDto: CreateDemandeAnnulationDto) {

     try {

      const newLigne= new DemandeAnnulation()
    

      const ligne = await this.demandeAnnulationRepository.save(newLigne)
      return ligne
    } catch (error) {
      throw new ConflictException(error)
    }
  }

  async findAll() {
    try {
      const ligne = await this.demandeAnnulationRepository.find()
      return ligne
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async findOne(id: number) {
    try {
      const ligne = await this.demandeAnnulationRepository.findOne({
        where:{id:id}
      })
      return ligne
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async update(id: number, updateDemandeAnnulation: UpdateDemandeAnnulation) {
    try {
      const ligne = await this.demandeAnnulationRepository.findOne({
        where:{id:id}
      })
      if(!ligne) throw new NotFoundException('ligne')
      Object.assign(ligne, updateDemandeAnnulation)
      return await this.demandeAnnulationRepository.save(ligne)
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      const ligne = await this.demandeAnnulationRepository.findOne({
        where: {id}
      });
      if(!ligne) throw new NotFoundException('ligne' );
  
      await this.demandeAnnulationRepository.delete({id});
      return true
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
