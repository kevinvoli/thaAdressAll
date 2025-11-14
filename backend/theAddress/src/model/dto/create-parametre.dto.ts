import { IsDate, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateParametreDto{

  @IsNotEmpty()
  @IsString()
  name: string | null;

  @IsNotEmpty()
  @IsString()
  description: string | null;

  @IsNotEmpty()
  @IsString()
  keywords: string | null;

  @IsNotEmpty()
  @IsString()
  telephone: string | null;

  @IsNotEmpty()
  @IsString()
  cellulaire: string | null;

  @IsNotEmpty()
  @IsString()
  email: string | null;

  @IsNotEmpty()
  @IsString()
  filename: string | null;

  @IsNotEmpty()
  @IsString()
  filename2: string | null;

  @IsNotEmpty()
  @IsString()
  adresses: string | null;

  @IsNotEmpty()
  @IsString()
  activite: string | null;

  @IsNotEmpty()
  @IsString()
  slogan: string | null;

  @IsNotEmpty()
  @IsString()
  facebook: string | null;

  @IsNotEmpty()
  @IsString()
  instagram: string | null;

  @IsNotEmpty()
  @IsString()
  twitter: string | null;

  @IsNotEmpty()
  @IsInt()
  tva: number;

  @IsNotEmpty()
  @IsInt()
  seuilproduct: number;

  @IsNotEmpty()
  @IsString()
  emailMail: string | null;

  @IsNotEmpty()
  @IsInt()
  idCategoryEcarte: number | null;

  @IsNotEmpty()
  @IsInt()
  promotion: number | null;

  @IsNotEmpty()
  @IsString()
  codePromotion: string | null;

  @IsNotEmpty()
  @IsDate()
  dateCodePromotion: Date | null;
}