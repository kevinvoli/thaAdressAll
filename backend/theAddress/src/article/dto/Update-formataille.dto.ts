import { PartialType } from '@nestjs/mapped-types';
import { CreateCategorieDto } from './create-categorie.dto';
import { CreateFormatailleDto } from './create-formataille.dto';

export class UpdateFormatailleDto extends PartialType(CreateFormatailleDto) {}
