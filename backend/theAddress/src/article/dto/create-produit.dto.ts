import { IsString, IsBoolean, IsInt, IsNotEmpty } from 'class-validator';

export class CreateProduitDto{
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  slug: string;

  @IsNotEmpty()
  @IsString()

  @IsNotEmpty()
  @IsString()
  weight: string | null;

  @IsNotEmpty()
  @IsString()
  description: string | null;

  @IsNotEmpty()
  @IsBoolean()
  online: boolean | null;

  @IsNotEmpty()
  @IsInt()
  vues: number;

  @IsNotEmpty()
  @IsString()
  garantie: string | null;

  @IsNotEmpty()
  @IsInt()
  price: number | null;

  @IsNotEmpty()
  @IsInt()
  categorieId:number
}