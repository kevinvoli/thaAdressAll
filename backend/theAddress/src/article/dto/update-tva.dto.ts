import { PartialType } from '@nestjs/mapped-types';
import { CreateCategorieDto } from './create-categorie.dto';
import { CreateTvaDto } from './create-tva.tdo';

export class UpdateTvaDto extends PartialType(CreateTvaDto) {}
