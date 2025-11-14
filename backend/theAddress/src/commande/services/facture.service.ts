import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Facture } from '../entities/facturre.entity';
import { CreateFactureDto } from '../dto/create-facture.dto';
import { UpdateFactureDto } from '../dto/update-facture.dto';


@Injectable()
export class FactureService {
  constructor(
    @InjectRepository(Facture)
    private readonly factureRepository: Repository<Facture>
  ){  }
  async create(createFactureDto: CreateFactureDto) {

     try {

      const newFacture= new Facture()
      newFacture.slug= createFactureDto.slug
      newFacture.dateFacturation= createFactureDto.dateFacturation
      newFacture.totalHT= createFactureDto.totalHT
      newFacture.totalTTC= createFactureDto.totalTTC
      newFacture.totalTVA= createFactureDto.totalTVA

      const facture = await this.factureRepository.save(newFacture)
      return facture
    } catch (error) {
      throw new ConflictException(error)
    }
  }

  async findAll() {
    try {
      const facture = await this.factureRepository.find()
      return facture
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async findOne(id: number) {
    try {
      const facture = await this.factureRepository.findOne({
        where:{id:id}
      })
      return facture
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async update(id: number, updateFactureDto: UpdateFactureDto) {
    try {
      const facture = await this.factureRepository.findOne({
        where:{id:id}
      })
      if(!facture) throw new NotFoundException('facture')
      Object.assign(facture, updateFactureDto)
      return await this.factureRepository.save(facture)
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      const facture = await this.factureRepository.findOne({
        where: {id}
      });
      if(!facture) throw new NotFoundException('facture' );
  
      await this.factureRepository.delete({id});
      return true
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
