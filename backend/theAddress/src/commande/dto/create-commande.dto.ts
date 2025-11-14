import { IsBoolean, IsDate, IsInt, IsNotEmpty, IsString } from 'class-validator';
export class CreateCommandeDto {

  @IsNotEmpty()
  @IsString()
  slug: string ;

  @IsNotEmpty()
  @IsString()
  date: string;

  @IsNotEmpty()
  @IsBoolean()
  valider: boolean;

  @IsNotEmpty()
  @IsString()
  chiffreenlettre: string;

  @IsNotEmpty()
  @IsString()
  note: string ;

  @IsNotEmpty()
  @IsBoolean()
  notif: boolean;

  @IsNotEmpty()
  @IsInt()
  totalweights: number;

  @IsNotEmpty()
  @IsInt()
  currenciesId: number ;

  @IsNotEmpty()
  @IsBoolean()
  checkouttermsagree: boolean ;

  @IsNotEmpty()
  @IsString()
  codecoupon: string ;
  
  @IsNotEmpty()
  @IsBoolean()
  annuler: boolean ;
 
  @IsNotEmpty()
  @IsDate()
  cancelAt: Date ;
 
  @IsNotEmpty()
  @IsDate()
  cancelDelay: Date ;
}
