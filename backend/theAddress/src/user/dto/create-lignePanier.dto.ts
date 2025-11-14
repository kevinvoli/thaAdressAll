import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateLignePanierDto{
  @IsString()
  @IsNotEmpty()
  nomProduit: string;

  @IsString()
  @IsNotEmpty()
  quantite: number;

  @IsString()
  @IsNotEmpty()
  prixHt: number;

  @IsNumber()
  panierId:number;

  @IsNumber()
  produit:number;
}