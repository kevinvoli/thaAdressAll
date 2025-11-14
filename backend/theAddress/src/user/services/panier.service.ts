import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Panier } from '../entities/panier.entity';
import { CreatePanierDto } from '../dto/create-panier.dto';
import { UpdatePanierDto } from '../dto/update-panier.dto';



@Injectable()
export class PanierService {
  constructor(
    @InjectRepository(Panier)
    private readonly panierRepository: Repository<Panier>
  ){  }
  async create(createPanierDto: CreatePanierDto) {

     try {

      const newLigne= new Panier()
     

      const ligne = await this.panierRepository.save(newLigne)
      return ligne
    } catch (error) {
      throw new ConflictException(error)
    }
  }

  async findAll() {
    try {
      const ligne = await this.panierRepository.find()
      return ligne
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async findOne(id: number) {
    try {
      const ligne = await this.panierRepository.findOne({
        where:{id:id}
      })
      return ligne
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async update(id: number, updatePanierDto: UpdatePanierDto) {
    try {
      const ligne = await this.panierRepository.findOne({
        where:{id:id}
      })
      if(!ligne) throw new NotFoundException('ligne')
      Object.assign(ligne, updatePanierDto)
      return await this.panierRepository.save(ligne)
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      const ligne = await this.panierRepository.findOne({
        where: {id}
      });
      if(!ligne) throw new NotFoundException('ligne' );
  
      await this.panierRepository.delete({id});
      return true
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
