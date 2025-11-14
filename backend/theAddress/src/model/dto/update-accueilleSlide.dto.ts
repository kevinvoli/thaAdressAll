import { PartialType } from '@nestjs/mapped-types';
import { CreateAccueilleSlideDto } from './create-accueilleSlide.dto';


export class UpdateAccueilleSlideDto extends PartialType(CreateAccueilleSlideDto) {}
