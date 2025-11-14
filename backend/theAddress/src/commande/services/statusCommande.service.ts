import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StatusCommande } from '../entities/statusCommande.entity';
import { CreateStatusCommandeDto } from '../dto/create-statusCommande.dto';
import { UpdateStatusComande } from '../dto/update-statusCommande.dto';



@Injectable()
export class StatusCommandeService {
  constructor(
    @InjectRepository(StatusCommande)
    private readonly StatusRepository: Repository<StatusCommande>
  ){  }
  async create(createStatusCommandeDto: CreateStatusCommandeDto) {

     try {

      const newStatus= new StatusCommande()
      newStatus.name= createStatusCommandeDto.name
      newStatus.color= createStatusCommandeDto.color

      const status = await this.StatusRepository.save(newStatus)
      return status
    } catch (error) {
      throw new ConflictException(error)
    }
  }

  async findAll() {
    try {
      const status = await this.StatusRepository.find()
      return status
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async findOne(id: number) {
    try {
      const status = await this.StatusRepository.findOne({
        where:{id:id}
      })
      return status
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async update(id: number, updateStatusComande: UpdateStatusComande) {
    try {
      const status = await this.StatusRepository.findOne({
        where:{id:id}
      })
      if(!status) throw new NotFoundException('facture')
      Object.assign(status, updateStatusComande)
      return await this.StatusRepository.save(status)
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      const status = await this.StatusRepository.findOne({
        where: {id}
      });
      if(!status) throw new NotFoundException('facture' );
  
      await this.StatusRepository.delete({id});
      return true
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
