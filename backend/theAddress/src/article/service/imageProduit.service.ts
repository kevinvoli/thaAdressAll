import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ImageProduit } from '../entities/produitImage.entity';
import { CreateImageProduitDto } from '../dto/create-imageProduit.dto';
import { CreateProduitDto } from '../dto/create-produit.dto';
import { Product } from '../entities/product.entity';
import { UpdateImageProduitDto } from '../dto/Update-imageProduit.dto';



@Injectable()
export class ImageProduitService {

  constructor(
    @InjectRepository(ImageProduit)
    private readonly imageProduitRepository: Repository<ImageProduit>,

    @InjectRepository(Product)
    private readonly  produitRepository : Repository<Product>
  ){

  }


  async create(createImageProduitDto:CreateImageProduitDto) {
    try {

      const produit = await this.produitRepository.findOne({
        where:{
          id:createImageProduitDto.produitId
        }
      })
      
      const newImageProduit = new ImageProduit()
      newImageProduit.nom = createImageProduitDto.nom
      newImageProduit.slug = createImageProduitDto.slug
      newImageProduit.ordre = createImageProduitDto.ordre
      newImageProduit.url = createImageProduitDto.url
      newImageProduit.produit = produit

      const imageProduit = await this.imageProduitRepository.save(newImageProduit)
      return imageProduit
    } catch (error) {
      throw new ConflictException(error)
    }
  }

  async findAll() {

    try {
      const ImageProduit = await this.imageProduitRepository.find()
      return ImageProduit
    } catch (error) {
      throw new NotFoundException(error)
    }
   
  }

  async findOne(id: number) {
    try {
      const ImageProduit = await this.imageProduitRepository.findOne({
        where:{id:id}
      })
      return ImageProduit
    } catch (error) {
      throw new NotFoundException(error)
    }
   
  }

  async update(id: number, updateImageProduitDto: UpdateImageProduitDto) {
    try {
      const ImageProduit = await this.imageProduitRepository.findOne({
        where:{id:id}
      })
      if(!ImageProduit) throw new NotFoundException('createur')
      Object.assign(ImageProduit, updateImageProduitDto)
      return await this.imageProduitRepository.save(ImageProduit)
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      const ImageProduit = await this.imageProduitRepository.findOne({
        where: {id}
      });
      if(!ImageProduit) throw new NotFoundException('ImageProduit' );
  
      await this.imageProduitRepository.delete({id});
      return true
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
