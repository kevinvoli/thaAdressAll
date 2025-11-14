import { PartialType } from '@nestjs/mapped-types';
import { CreateMatierDto } from './create-matiere.dto';

export class UpdateMatiereDto extends PartialType(CreateMatierDto) {}
