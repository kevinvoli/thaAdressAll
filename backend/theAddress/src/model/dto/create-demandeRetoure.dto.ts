import { IsBoolean, IsDate, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateDemandeRetoureDto{

  @IsNotEmpty()
  @IsInt()
  userId: number | null;

  @IsNotEmpty()
  @IsInt()
  commandesId: number | null;

  @IsString()
  @IsNotEmpty()
  motifs: string;

  @IsNotEmpty()
  @IsBoolean()
  active: boolean;

  @IsNotEmpty()
  @IsString()
  products: string | null;

  @IsNotEmpty()
  @IsBoolean()
  annuler: boolean;

  @IsNotEmpty()
  @IsDate()
  cancelAt: Date | null;

  @IsNotEmpty()
  @IsString()
  origine: string;

  @IsNotEmpty()
  @IsString()
  pays: string;

  @IsNotEmpty()
  @IsString()
  etat: string;

  @IsNotEmpty()
  @IsString()
  ville: string;

  @IsNotEmpty()
  @IsString()
  adresse: string;

  @IsNotEmpty()
  @IsString()
  codepostal: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  contact: string;

  @IsNotEmpty()
  @IsBoolean()
  isNonConforme: boolean | null;

  @IsNotEmpty()
  @IsBoolean()
  isDefectueux: boolean | null;
}