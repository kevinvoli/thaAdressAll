import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categorie } from '../entities/categorie.entity';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { CreateProduitDto } from '../dto/create-produit.dto';
import { UpdateProduitDto } from '../dto/Update-produit.dto';

@Injectable()
export class ProduitService {

  constructor(
    @InjectRepository(Product)
    private readonly produitRepository: Repository<Product>,

    @InjectRepository(Categorie)
    private readonly categorieRepository: Repository<Categorie>,
  ){

  }

  async create(createProduitDto: CreateProduitDto) {
    try {
      const category= await this.categorieRepository.findOne({
        where:{id:createProduitDto.categorieId}
      })

      const newProduit= new Product()
      newProduit.name= createProduitDto.name
      newProduit.slug= createProduitDto.slug
      newProduit.weight= createProduitDto.weight;
      newProduit.description= createProduitDto.description;
      newProduit.garantie= createProduitDto.garantie;
      newProduit.price= createProduitDto.price;      
      newProduit.online= true;
      newProduit.categorie=category

      const produit = await this.produitRepository.save(newProduit)
      return produit
    } catch (error) {
      throw new ConflictException(error)
    }
  }

  async findAll() {

    try {
      const produit = await this.produitRepository.find({
        relations:{
          
        }
      })
      return produit
    } catch (error) {
      throw new NotFoundException(error)
    }
   
  }

  async findOne(id: number) {
    try {
      const produit = await this.produitRepository.findOne({
        where:{id:id},
        relations:{
          colors:true,
          matiere:true,
          createur:true,
          commentair:true,
          atributs:true,
          categorie:true,
          tva:true,
          images:true
        }
      })
      return produit
    } catch (error) {
      throw new NotFoundException(error)
    }
   
  }

  async findOneByCategorieId(id: number) {
    try {
      const produit = await this.produitRepository.findOne({
        where:{id:id}
      })
      return produit
    } catch (error) {
      throw new NotFoundException(error)
    }
   
  }

  async update(id: number, updateProduitDto: UpdateProduitDto) {

    try {
      const produit = await this.produitRepository.findOne({
        where:{id:id}
      })
      if(!produit) throw new NotFoundException('produit')
      Object.assign(produit, updateProduitDto)
      return await this.produitRepository.save(produit)
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      const produit = await this.produitRepository.findOne({
        where: {id}
      });
      if(!produit) throw new NotFoundException('produit' );
  
      await this.produitRepository.delete({id});
      return true
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
