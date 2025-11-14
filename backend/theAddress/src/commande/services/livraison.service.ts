import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Livraison } from '../entities/livraison.entity';
import { CreateLivraisonDto } from '../dto/create-livraison.dto';
import { UpdateLivraisonDto } from '../dto/update-livraison.dto';


@Injectable()
export class LivraisonService {
  constructor(
    @InjectRepository(Livraison)
    private readonly livraisonRepository: Repository<Livraison>
  ){  }
  async create(createLivraisonDto: CreateLivraisonDto) {

     try {

      const newLivraison= new Livraison()
      newLivraison.fraitExpedition= createLivraisonDto.fraitExpedition
      newLivraison.nomLivreur= createLivraisonDto.nomLivreur
      newLivraison.dateEnvoir= createLivraisonDto.dateEnvoir
      newLivraison.numeroSuivie= createLivraisonDto.numeroSuivie
      newLivraison.estimationDate= createLivraisonDto.estimationDate
      

      const livraison = await this.livraisonRepository.save(newLivraison)
      return livraison
    } catch (error) {
      throw new ConflictException(error)
    }
  }

  async findAll() {
    try {
      const livraison = await this.livraisonRepository.find()
      return livraison
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async findOne(id: number) {
    try {
      const livraison = await this.livraisonRepository.findOne({
        where:{id:id}
      })
      return livraison
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async update(id: number, updateLivraisonDto: UpdateLivraisonDto) {
    try {
      const livraison = await this.livraisonRepository.findOne({
        where:{id:id}
      })
      if(!livraison) throw new NotFoundException('facture')
      Object.assign(livraison, updateLivraisonDto)
      return await this.livraisonRepository.save(livraison)
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      const livraison = await this.livraisonRepository.findOne({
        where: {id}
      });
      if(!livraison) throw new NotFoundException('facture' );
  
      await this.livraisonRepository.delete({id});
      return true
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
