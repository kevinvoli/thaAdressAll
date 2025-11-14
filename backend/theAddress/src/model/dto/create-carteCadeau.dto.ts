import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateCarteCadeauDto{
  @IsInt()
  @IsNotEmpty()
  productsId: number | null;

  @IsString()
  @IsNotEmpty()
  nomprenoms: string;

  @IsString()
  @IsNotEmpty()
  nomprenomsbeneficiaire: string;

  @IsString()
  @IsNotEmpty()
  emailbeneficiaire: string;

  @IsNotEmpty()
  message: string | null;

  @IsString()
  @IsNotEmpty()
  codecoupon: string;

  @IsNotEmpty()
  couponused: boolean;
 
  @IsNotEmpty()
  totalRelicat: number | null;

  @IsNotEmpty()
  montant: number | null;
}