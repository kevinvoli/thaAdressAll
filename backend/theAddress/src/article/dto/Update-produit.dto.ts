import { PartialType } from '@nestjs/mapped-types';
import { CreateCategorieDto } from './create-categorie.dto';
import { UpdateImageProduitDto } from './Update-imageProduit.dto';
import { CreateProduitDto } from './create-produit.dto';

export class UpdateProduitDto extends PartialType(CreateProduitDto) {}
