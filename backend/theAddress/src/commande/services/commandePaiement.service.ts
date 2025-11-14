import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommandePaiemant } from '../entities/commandePaiement.entity';
import { CreateCommandePaiement } from '../dto/create-commandePaiement.dto';
import { UpdateCommandePaiement } from '../dto/update-commandepaiement.dto';

@Injectable()
export class CommandePaiementService {
  constructor(
    @InjectRepository(CommandePaiemant)
    private readonly commandeRepository: Repository<CommandePaiemant>
  ){  }
  async create(createCommandePaiement: CreateCommandePaiement) {

     try {

      const newCommandePaiement= new CommandePaiemant()
      newCommandePaiement.slug= createCommandePaiement.slug
      newCommandePaiement.methode= createCommandePaiement.methode
      newCommandePaiement.datePaiement= createCommandePaiement.datePaiement
      newCommandePaiement.montant= createCommandePaiement.montant



      const commandePaiement = await this.commandeRepository.save(newCommandePaiement)
      return commandePaiement
    } catch (error) {
      throw new ConflictException(error)
    }
  }

  async findAll() {
    try {
      const commandePaiement = await this.commandeRepository.find()
      return commandePaiement
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async findOne(id: number) {
    try {
      const commandePaiement = await this.commandeRepository.findOne({
        where:{id:id}
      })
      return commandePaiement
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async update(id: number, UpdateCommandePaiement: UpdateCommandePaiement) {
    try {
      const commandePaiement = await this.commandeRepository.findOne({
        where:{id:id}
      })
      if(!commandePaiement) throw new NotFoundException('commande')
      Object.assign(commandePaiement, UpdateCommandePaiement)
      return await this.commandeRepository.save(commandePaiement)
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      const commandePaiement = await this.commandeRepository.findOne({
        where: {id}
      });
      if(!commandePaiement) throw new NotFoundException('commandePaiement' );
  
      await this.commandeRepository.delete({id});
      return true
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
