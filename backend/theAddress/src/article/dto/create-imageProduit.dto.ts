import { IsInt, IsNotEmpty, IsString } from 'class-validator';
export class CreateImageProduitDto{
  @IsNotEmpty()
  @IsString()
  nom:string;

  @IsNotEmpty()
  @IsString()
  slug:string;

  @IsNotEmpty()
  @IsString()
  ordre:string;

  @IsNotEmpty()
  @IsString()
  url:string;

  @IsNotEmpty()
  @IsInt()
  produitId: number
}