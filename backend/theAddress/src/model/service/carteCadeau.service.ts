import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarteCadeau } from '../entities/carteCadeau.entiy';
import { UpdateCarteCadeauDto } from '../dto/update-carteCadeau.dto';
import { CreateCarteCadeauDto } from '../dto/create-carteCadeau.dto';




@Injectable()
export class CarteCadeauService {
  constructor(
    @InjectRepository(CarteCadeau)
    private readonly carteCadeauRepository: Repository<CarteCadeau>
  ){  }
  async create(createCarteCadeauDto: CreateCarteCadeauDto) {

     try {

      const newLigne= new CarteCadeau()
     

      const ligne = await this.carteCadeauRepository.save(newLigne)
      return ligne
    } catch (error) {
      throw new ConflictException(error)
    }
  }

  async findAll() {
    try {
      const ligne = await this.carteCadeauRepository.find()
      return ligne
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async findOne(id: number) {
    try {
      const ligne = await this.carteCadeauRepository.findOne({
        where:{id:id}
      })
      return ligne
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async update(id: number, updateCarteCadeauDto: UpdateCarteCadeauDto) {
    try {
      const ligne = await this.carteCadeauRepository.findOne({
        where:{id:id}
      })
      if(!ligne) throw new NotFoundException('ligne')
      Object.assign(ligne, updateCarteCadeauDto)
      return await this.carteCadeauRepository.save(ligne)
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      const ligne = await this.carteCadeauRepository.findOne({
        where: {id}
      });
      if(!ligne) throw new NotFoundException('ligne' );
  
      await this.carteCadeauRepository.delete({id});
      return true
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
