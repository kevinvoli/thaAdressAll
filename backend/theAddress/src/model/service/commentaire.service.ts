import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Commentairs } from '../entities/commentairs.entity';
import { CreateCommentairsDto } from '../dto/create-commentairs.dto';
import { UpdateCommentairsDto } from '../dto/update-commentairs.dto';


@Injectable()
export class CommentaireService {
  constructor(
    @InjectRepository(Commentairs)
    private readonly commentairsRepository: Repository<Commentairs>
  ){  }
  async create(createCommentairsDto: CreateCommentairsDto) {

     try {

      const newLigne= new Commentairs()
      // newLigne.nomProduit= createLigneDto.nomProduit
   

      const ligne = await this.commentairsRepository.save(newLigne)
      return ligne
    } catch (error) {
      throw new ConflictException(error)
    }
  }

  async findAll() {
    try {
      const ligne = await this.commentairsRepository.find()
      return ligne
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async findOne(id: number) {
    try {
      const ligne = await this.commentairsRepository.findOne({
        where:{id:id}
      })
      return ligne
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async update(id: number, updateCommentairsDto: UpdateCommentairsDto) {
    try {
      const ligne = await this.commentairsRepository.findOne({
        where:{id:id}
      })
      if(!ligne) throw new NotFoundException('ligne')
      Object.assign(ligne, updateCommentairsDto)
      return await this.commentairsRepository.save(ligne)
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      const ligne = await this.commentairsRepository.findOne({
        where: {id}
      });
      if(!ligne) throw new NotFoundException('ligne' );
  
      await this.commentairsRepository.delete({id});
      return true
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
