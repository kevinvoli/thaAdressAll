import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddressFact } from '../entities/address-fact.entity';
import { CreateAdressFactDto } from '../dto/Create-addressFact.dto';
import { UpdateAddressFactDto } from '../dto/update-addressFact.dto';
import { UserService } from '../user.service';




@Injectable()
export class AddressFactService {
  constructor(
    @InjectRepository(AddressFact)
    private readonly addressFactRepository: Repository<AddressFact>,
    private readonly userService : UserService
  ){  }
  async create(createAdressFactDto: CreateAdressFactDto, id:number) {

     try {
      const user = await this.userService.findOne(id)
      if(!user) throw new NotFoundException('echec')
      const newAddress= new AddressFact()
        newAddress.adresse=createAdressFactDto.adresse
        newAddress.appartements= createAdressFactDto.appartements
        newAddress.contacts= createAdressFactDto.contacts
        newAddress.numeroRue= createAdressFactDto.numeroRue
        newAddress.user = user
      const address = await this.addressFactRepository.save(newAddress)
      return address
    } catch (error) {
      throw new ConflictException(error)
    }
  }

  async findByUser(id:number){

    const user= await this.userService.findOne(id)
    let address:any

    if(!user) throw new NotFoundException()
    address = await this.addressFactRepository.findOne({where:{user:{
      id:id
    }
    }})
    if(!address) throw new NotFoundException()
    return address

  }

  async findAll() {
    try {
      const address = await this.addressFactRepository.find({
        relations:{
          user:true
        }
      })
      return address
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async findOneById(id: number) {
    try {
      const address = await this.addressFactRepository.findOne({
        where:{id:id},
        relations:{
          user:true,
        }
        
      })
      return address
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async findOne(id: number) {
    try {
      const address = await this.addressFactRepository.findOne({
        where:{id:id},
        relations:{
          user:true,
        }
        
      })
      return address
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async update(id: number, updateAddressFactDto: UpdateAddressFactDto) {
    try {
      const address = await this.addressFactRepository.findOne({
        where:{id:id}
      })
      if(!address) throw new NotFoundException('address')
      Object.assign(address, updateAddressFactDto)
      return await this.addressFactRepository.save(address)
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      const address = await this.addressFactRepository.findOne({
        where: {id}
      });
      if(!address) throw new NotFoundException('address' );
  
      await this.addressFactRepository.delete({id});
      return true
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
