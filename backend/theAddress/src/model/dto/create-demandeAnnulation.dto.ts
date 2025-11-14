import { IsBoolean, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateDemandeAnnulationDto{
  @IsInt()
  @IsNotEmpty()
  userId: number | null;

  @IsInt()
  @IsNotEmpty()
  commandesId: number | null;

  @IsNotEmpty()
  @IsString()
  motifs: string | null;
 
  @IsNotEmpty()
  @IsString()
  products: string | null;

  @IsNotEmpty()
  @IsBoolean()
  isTaille: boolean | null;

  @IsNotEmpty()
  @IsBoolean()
  isChangeModepaiement: boolean | null;

  @IsNotEmpty()
  @IsBoolean()
  isTromper: boolean | null;

  @IsNotEmpty()
  @IsBoolean()
  isChangeAvis: boolean | null;

  @IsNotEmpty()
  @IsBoolean()
  isAutre: boolean | null;

  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean | null;
}