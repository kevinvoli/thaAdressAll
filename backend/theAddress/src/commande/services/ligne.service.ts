import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ligne } from '../entities/ligne.entity';
import { CreateLigneDto } from '../dto/create-ligne.dto';
import { UpdateLigneDto } from '../dto/update-ligne.dto';



@Injectable()
export class LigneService {
  constructor(
    @InjectRepository(Ligne)
    private readonly ligneRepository: Repository<Ligne>
  ){  }
  async create(createLigneDto: CreateLigneDto) {

     try {

      const newLigne= new Ligne()
      newLigne.nomProduit= createLigneDto.nomProduit
      newLigne.prix_unitaire= createLigneDto.prix_unitaire
      newLigne.quantite= createLigneDto.quantite

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

  async update(id: number, updateLigneDto: UpdateLigneDto) {
    try {
      const ligne = await this.ligneRepository.findOne({
        where:{id:id}
      })
      if(!ligne) throw new NotFoundException('ligne')
      Object.assign(ligne, updateLigneDto)
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
