import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccueilleSlade } from '../entities/accueilleSlide.entity';
import { CreateAccueilleSlideDto } from '../dto/create-accueilleSlide.dto';
import { UpdateAccueilleSlideDto } from '../dto/update-accueilleSlide.dto';




@Injectable()
export class AccueillSlideService {
  constructor(
    @InjectRepository(AccueilleSlade)
    private readonly accueilleSlideRepository: Repository<AccueilleSlade>
  ){  }
  async create(createAccueilleSlideDto: CreateAccueilleSlideDto) {

     try {

      const newLigne= new AccueilleSlade()
      

      const slide = await this.accueilleSlideRepository.save(newLigne)
      return slide
    } catch (error) {
      throw new ConflictException(error)
    }
  }

  async findAll() {
    try {
      const slide = await this.accueilleSlideRepository.find()
      return slide
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async findOne(id: number) {
    try {
      const slide = await this.accueilleSlideRepository.findOne({
        where:{id:id}
      })
      return slide
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async update(id: number, updateAccueilleSlideDto: UpdateAccueilleSlideDto) {
    try {
      const slide = await this.accueilleSlideRepository.findOne({
      })
      if(!slide) throw new NotFoundException('slide')
      Object.assign(slide, updateAccueilleSlideDto)
      return await this.accueilleSlideRepository.save(slide)
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      const slide = await this.accueilleSlideRepository.findOne({
        where: {id}
      });
      if(!slide) throw new NotFoundException('slide' );
  
      await this.accueilleSlideRepository.delete({id});
      return true
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
