import { IsBoolean, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateContactezNousDto{
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  telephone: string;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsNotEmpty()
  @IsInt()
  countriesId: number | null;

  @IsString()
  @IsNotEmpty()
  nom: string;

  @IsString()
  @IsNotEmpty()
  prenoms: string;

  @IsString()
  @IsNotEmpty()
  demandes: string;

  @IsNotEmpty()
  @IsBoolean()
  conditionsgenerales: boolean;

  @IsString()
  @IsNotEmpty()
  numcommande: string | null;

  @IsString()
  @IsNotEmpty()
  civilite: string;
}