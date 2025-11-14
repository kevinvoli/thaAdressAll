import { IsInt, IsNotEmpty, IsString } from 'class-validator';
export class CreateLigneDto{
  @IsNotEmpty()
  @IsString()
  nomProduit:string

  @IsNotEmpty()
  @IsString()
  prix_unitaire:string

  @IsNotEmpty()
  @IsInt()
  quantite:number
}