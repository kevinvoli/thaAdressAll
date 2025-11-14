import { IsBoolean, IsInt, IsNotEmpty, isString, IsString } from 'class-validator';

export class CreateCategorieDto{
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  slug: string;

  @IsNotEmpty()
  @IsString()
  filename: string | null;

  @IsNotEmpty()
  @IsInt()
  ordre: number;

  @IsNotEmpty()
  @IsBoolean()
  solde: boolean | null;

  @IsNotEmpty()
  @IsInt()
  parentCategory:number
}