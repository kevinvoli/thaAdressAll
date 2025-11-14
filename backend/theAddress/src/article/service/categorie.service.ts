import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateCategorieDto } from '../dto/create-categorie.dto';
import { UpdateCategorieDto } from '../dto/update-categorie.dto';
import { Categorie } from '../entities/categorie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategorieService {

  constructor(
    @InjectRepository(Categorie)
    private readonly categorieRepository: Repository<Categorie>
  ){

  }


  async create(updateCategorieDto:Partial<CreateCategorieDto>) {
    try {
      const parentCategory= await this.categorieRepository.findOne({
        where:{id:updateCategorieDto.parentCategory}
      })

      const newCategorie= new Categorie()
      newCategorie.name= updateCategorieDto.name
      newCategorie.slug= updateCategorieDto.slug
      newCategorie.filename= updateCategorieDto.filename;
      newCategorie.ordre= updateCategorieDto.ordre;
      newCategorie.solde= updateCategorieDto.solde;
      newCategorie.parentCategory=parentCategory

      const categorie = await this.categorieRepository.save(newCategorie)
      return categorie
    } catch (error) {
      throw new ConflictException(error)
    }
  }

  async findAll() {

    try {
      const categorie = await this.categorieRepository.find()
      return categorie
    } catch (error) {
      throw new NotFoundException(error)
    }
   
  }

  async findOne(id: number) {
    try {
      const categorie = await this.categorieRepository.findOne({
        where:{id:id}
      })
      return categorie
    } catch (error) {
      throw new NotFoundException(error)
    }
   
  }

  async update(id: number, updateCategorieDto: UpdateCategorieDto) {

    try {
      const categorie = await this.categorieRepository.findOne({
        where:{id:id}
      })
      if(!categorie) throw new NotFoundException('categorie')
      Object.assign(categorie, updateCategorieDto)
      return await this.categorieRepository.save(categorie)
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      const categorie = await this.categorieRepository.findOne({
        where: {id}
      });
      if(!categorie) throw new NotFoundException('user' );
  
      await this.categorieRepository.delete({id});
      return true
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
