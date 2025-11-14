import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Approvisionnement } from '../entities/approvisionnement.entity';
import { CreateApprovisonnementDto } from '../dto/create-approvisionnement.dto';
import { UpdateApprovisionnementDto } from '../dto/Update-approvisionnement.dto';



@Injectable()
export class ApprovisionnementService {

  constructor(
    @InjectRepository(Approvisionnement)
    private readonly approvisionnementRepository: Repository<Approvisionnement>,
    private readonly produitRepository: Repository<Approvisionnement>
  ){

  }

  async create(createApprovisonnementDto:CreateApprovisonnementDto) {
    try {

      const newcreateApprovisonnementDto= new Approvisionnement()
      newcreateApprovisonnementDto.oldqty= createApprovisonnementDto.oldqty
      newcreateApprovisonnementDto.newqty= createApprovisonnementDto.newqty
      newcreateApprovisonnementDto.remarque= createApprovisonnementDto.remarque  

      const approvisionnement = await this.approvisionnementRepository.save(newcreateApprovisonnementDto)

      return approvisionnement
    } catch (error) {
      throw new ConflictException(error)
    }
  }

  async findAll() {

    try {
      const approvisionnement = await this.approvisionnementRepository.find()
      return approvisionnement
    } catch (error) {
      throw new NotFoundException(error)
    }
   
  }

  async findOne(id: number) {
    try {
      const approvisionnement = await this.approvisionnementRepository.findOne({
        where:{id:id}
      })
      return approvisionnement
    } catch (error) {
      throw new NotFoundException(error)
    }
   
  }

  async update(id: number, updateApprovisionnementDto: UpdateApprovisionnementDto) {
    try {
      const approvisionnement = await this.approvisionnementRepository.findOne({
        where:{id:id}
      })
      if(!approvisionnement) throw new NotFoundException('createur')
      Object.assign(approvisionnement, updateApprovisionnementDto)
      return await this.approvisionnementRepository.save(approvisionnement)
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      const approvisionnement = await this.approvisionnementRepository.findOne({
        where: {id}
      });
      if(!approvisionnement) throw new NotFoundException('user' );
  
      await this.approvisionnementRepository.delete({id});
      return true
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
