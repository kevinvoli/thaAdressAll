import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LignePanier } from '../entities/lignePanier.entity';
import { CreateLignePanierDto } from '../dto/create-lignePanier.dto';
import { UpdateLignePanierDto } from '../dto/update-ligne.dto';
import { ProduitService } from '../../article/service/produit.service';
import { PanierService } from './panier.service';



@Injectable()
export class LignePanierService {
  constructor(
    @InjectRepository(LignePanier)
    private readonly lignePanierRepository: Repository<LignePanier>,
    private readonly produitService :ProduitService,
    private readonly panierService: PanierService,
  ){  }
  async create(createLignePanierDto: CreateLignePanierDto) {

     try {
      const produit = await this.produitService.findOne(createLignePanierDto.produit)
      const panier = await this.panierService.findOne(createLignePanierDto.panierId)

      const newLigne= new LignePanier()
      newLigne.nomProduit= createLignePanierDto.nomProduit
      newLigne.prixHt= createLignePanierDto.prixHt
      newLigne.quantite= createLignePanierDto.quantite
      newLigne.produit = produit
      newLigne.panier  = panier

      const ligne = await this.lignePanierRepository.save(newLigne)
      return ligne
    } catch (error) {
      throw new ConflictException(error)
    }
  }

  async findAll() {
    try {
      const ligne = await this.lignePanierRepository.find({
        relations:{
          produit:true,
          panier:true
        }
      })
      return ligne
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async findOne(id: number) {
    try {
      const ligne = await this.lignePanierRepository.findOne({
        where:{id:id},
        relations:{
          produit:true,
          panier:true
        }
      })
      return ligne
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async update(id: number, updateLignePanierDto: UpdateLignePanierDto) {
    try {
      const ligne = await this.lignePanierRepository.findOne({
        where:{id:id},
      })
      if(!ligne) throw new NotFoundException('ligne')
      Object.assign(ligne, updateLignePanierDto)
      return await this.lignePanierRepository.save(ligne)
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      const ligne = await this.lignePanierRepository.findOne({
        where: {id}
      });
      if(!ligne) throw new NotFoundException('ligne' );
  
      await this.lignePanierRepository.delete({id});
      return true
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
