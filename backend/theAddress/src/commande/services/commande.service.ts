import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommandeDto } from '../dto/create-commande.dto';
import { UpdateCommandeDto } from '../dto/update-commande.dto';
import { Commande } from '../entities/commande.entity';
import { AddressFactService } from '../../user/services/addressFact.service';

@Injectable()
export class CommandeService {
  constructor(
    @InjectRepository(Commande)
    private readonly commandeRepository: Repository<Commande>,
    private readonly addressFactService: AddressFactService,
  ){  }
  async create(createCommandeDto: CreateCommandeDto) {
     try {

      const newCommande= new Commande()
      newCommande.slug= createCommandeDto.slug
      newCommande.valider= createCommandeDto.valider
      newCommande.chiffreenlettre= createCommandeDto.chiffreenlettre
      newCommande.note = createCommandeDto.note
      newCommande.notif = createCommandeDto.notif
      newCommande.currenciesId = createCommandeDto.currenciesId
      newCommande.checkouttermsagree = createCommandeDto.checkouttermsagree
      newCommande.codecoupon= createCommandeDto.codecoupon
      newCommande.cancelAt= createCommandeDto.cancelAt
      newCommande.cancelDelay= createCommandeDto.cancelDelay
      const commande = await this.commandeRepository.save(newCommande)
      return commande
    } catch (error) {
      throw new ConflictException(error)
    }
  }


  async addAddressFac(addressId: number) {
    const address = this.addressFactService.findOneById(addressId)


    try {

     const newCommande= new Commande()
     const commande = await this.commandeRepository.save(newCommande)
     return commande
   } catch (error) {
     throw new ConflictException(error)
   }
 }

  async findAll() {
    try {
      const commande = await this.commandeRepository.find()
      return commande
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async findOne(id: number) {
    try {
      const commande = await this.commandeRepository.findOne({
        where:{id:id}
      })
      return commande
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async update(id: number, updateCommandeDto: UpdateCommandeDto) {
    try {
      const commande = await this.commandeRepository.findOne({
        where:{id:id}
      })
      if(!commande) throw new NotFoundException('commande')
      Object.assign(commande, updateCommandeDto)
      return await this.commandeRepository.save(commande)
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      const commande = await this.commandeRepository.findOne({
        where: {id}
      });
      if(!commande) throw new NotFoundException('commande' );
  
      await this.commandeRepository.delete({id});
      return true
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
