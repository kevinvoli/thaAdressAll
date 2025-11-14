import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pays } from '../entities/pays.entity';
import { CreatePaysDto } from '../dto/create-pays.dto';
import { UpdatePays } from '../dto/update-pays.dto';



@Injectable()
export class PaysService {
  constructor(
    @InjectRepository(Pays)
    private readonly ligneRepository: Repository<Pays>
  ){  }
  async create(createPaysDto: CreatePaysDto) {

     try {

      const newLigne= new Pays()


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

  async update(id: number, updatepaysDto: UpdatePays) {
    try {
      const ligne = await this.ligneRepository.findOne({
        where:{id:id}
      })
      if(!ligne) throw new NotFoundException('ligne')
      Object.assign(ligne, updatepaysDto)
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
