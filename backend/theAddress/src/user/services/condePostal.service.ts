import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


import { CodePostal } from '../entities/codePostal.entity';
import { CreateCodePostalDto } from '../dto/create-codePostal..dto';
import { UpdateCodePostal } from '../dto/update-codePostal.dto';



@Injectable()
export class CodePostalService {
  constructor(
    @InjectRepository(CodePostal)
    private readonly codePostalRepository: Repository<CodePostal>
  ){  }
  async create(createCodePostalDto: CreateCodePostalDto) {

     try {

      const newCodePostal= new CodePostal()
     

      const codePostal = await this.codePostalRepository.save(newCodePostal)
      return codePostal
    } catch (error) {
      throw new ConflictException(error)
    }
  }

  async findAll() {
    try {
      const codePostal = await this.codePostalRepository.find()
      return codePostal
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async findOne(id: number) {
    try {
      const codePostal = await this.codePostalRepository.findOne({
        where:{id:id}
      })
      return codePostal
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async update(id: number, updateCodePostal: UpdateCodePostal) {
    try {
      const codePostal = await this.codePostalRepository.findOne({
        where:{id:id}
      })
      if(!codePostal) throw new NotFoundException('codePostal')
      Object.assign(codePostal, updateCodePostal)
      return await this.codePostalRepository.save(codePostal)
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      const codePostal = await this.codePostalRepository.findOne({
        where: {id}
      });
      if(!codePostal) throw new NotFoundException('codePostal' );
  
      await this.codePostalRepository.delete({id});
      return true
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
