import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactezNous } from '../entities/contactezNous.entity';
import { CreateContactezNousDto } from '../dto/create-contactezNouz.dto';
import { UpdateContactezNousDto } from '../dto/update-contactezNouz.dto';

@Injectable()
export class ContacteNousService {
  constructor(
    @InjectRepository(ContactezNous)
    private readonly contacteNousRepository: Repository<ContactezNous>
  ){  }
  async create(createContactezNousDto: CreateContactezNousDto) {

     try {

      const newLigne= new ContactezNous()

      const ligne = await this.contacteNousRepository.save(newLigne)
      return ligne
    } catch (error) {
      throw new ConflictException(error)
    }
  }

  async findAll() {
    try {
      const ligne = await this.contacteNousRepository.find()
      return ligne
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async findOne(id: number) {
    try {
      const ligne = await this.contacteNousRepository.findOne({
        where:{id:id}
      })
      return ligne
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async update(id: number, updateContactezNousDto: UpdateContactezNousDto) {
    try {
      const ligne = await this.contacteNousRepository.findOne({
        where:{id:id}
      })
      if(!ligne) throw new NotFoundException('ligne')
      Object.assign(ligne, updateContactezNousDto)
      return await this.contacteNousRepository.save(ligne)
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      const ligne = await this.contacteNousRepository.findOne({
        where: {id}
      });
      if(!ligne) throw new NotFoundException('ligne' );
  
      await this.contacteNousRepository.delete({id});
      return true
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
