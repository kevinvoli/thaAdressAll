import { PartialType } from '@nestjs/mapped-types';
import { CreateCategorieDto } from './create-categorie.dto';
import { CreateImageProduitDto } from './create-imageProduit.dto';

export class UpdateImageProduitDto extends PartialType(CreateImageProduitDto) {}
