import { IsNotEmpty, IsString } from "class-validator";

export class CreateAdressFactDto{
  @IsNotEmpty()
  @IsString()
  adresse: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  nom: string;

  @IsNotEmpty()
  @IsString()
  contacts: string;

  @IsNotEmpty()
  countriesId: number | null;

  @IsNotEmpty()
  zonesId: number | null;

  @IsNotEmpty()
  @IsString()
  prenoms: string;

  @IsNotEmpty()
  @IsString()
  entreprise: string | null;

  @IsNotEmpty()
  @IsString()
  appartements: string | null;

  @IsNotEmpty()
  @IsString()
  numeroRue: string | null;

  @IsNotEmpty()
  @IsString()
  postalCode: string | null;
}