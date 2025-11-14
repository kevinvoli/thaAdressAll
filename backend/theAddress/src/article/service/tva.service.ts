import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tva } from '../entities/tva.entity';
import { CreateTvaDto } from '../dto/create-tva.tdo';
import { UpdateTvaDto } from '../dto/update-tva.dto';



@Injectable()
export class TvaService {

  constructor(
    @InjectRepository(Tva)
    private readonly tvaRepository: Repository<Tva>
  ){

  }


  async create(createTvaDto:CreateTvaDto) {
    try {

      const newTva= new Tva()
      newTva.taux= createTvaDto.taux
      newTva.nom= createTvaDto.nom
      newTva.periodeTva= createTvaDto.periodeTva
      const tva = await this.tvaRepository.save(newTva)
      return tva
    } catch (error) {
      throw new ConflictException(error)
    }
  }

  async findAll() {

    try {
      const tva = await this.tvaRepository.find()
      return tva
    } catch (error) {
      throw new NotFoundException(error)
    }
   
  }

  async findOne(id: number) {
    try {
      const tva = await this.tvaRepository.findOne({
        where:{id:id}
      })
      return tva
    } catch (error) {
      throw new NotFoundException(error)
    }
   
  }

  async update(id: number, updateTvaDto: UpdateTvaDto) {
    try {
      const tva = await this.tvaRepository.findOne({
        where:{id:id}
      })
      if(!tva) throw new NotFoundException('createur')
      Object.assign(tva, updateTvaDto)
      return await this.tvaRepository.save(tva)
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      const tva = await this.tvaRepository.findOne({
        where: {id}
      });
      if(!tva) throw new NotFoundException('tva' );
  
      await this.tvaRepository.delete({id});
      return true
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
