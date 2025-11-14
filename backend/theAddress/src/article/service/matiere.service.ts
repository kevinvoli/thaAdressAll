import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Matiere } from '../entities/matieres.entity';
import { CreateMatierDto } from '../dto/create-matiere.dto';
import { UpdateAdminDto } from '../../admin/dto/update-admin.dto';
import { UpdateMatiereDto } from '../dto/Update-matiere.dto';



@Injectable()
export class MatiereService {

  constructor(
    @InjectRepository(Matiere)
    private readonly createurRepository: Repository<Matiere>
  ){

  }


  async create(createMatierDto:CreateMatierDto) {
    try {

      const newMatier= new Matiere()
      newMatier.name= createMatierDto.name
      newMatier.slug = createMatierDto.slug
      newMatier.description = createMatierDto.description


      const matiere = await this.createurRepository.save(newMatier)
      return matiere
    } catch (error) {
      throw new ConflictException(error)
    }
  }

  async findAll() {

    try {
      const matiere = await this.createurRepository.find()
      return matiere
    } catch (error) {
      throw new NotFoundException(error)
    }
   
  }

  async findOne(id: number) {
    try {
      const matiere = await this.createurRepository.findOne({
        where:{id:id}
      })
      return matiere
    } catch (error) {
      throw new NotFoundException(error)
    }
   
  }

  async update(id: number, updateMatiereDto: UpdateMatiereDto) {
    try {
      const matiere = await this.createurRepository.findOne({
        where:{id:id}
      })
      if(!matiere) throw new NotFoundException('createur')
      Object.assign(matiere, updateMatiereDto)
      return await this.createurRepository.save(matiere)
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      const matiere = await this.createurRepository.findOne({
        where: {id}
      });
      if(!matiere) throw new NotFoundException('user' );
  
      await this.createurRepository.delete({id});
      return true
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
