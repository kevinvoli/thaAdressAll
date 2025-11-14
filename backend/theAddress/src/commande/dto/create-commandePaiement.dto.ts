import { IsNotEmpty, IsString } from 'class-validator';
export class CreateCommandePaiement{

  @IsNotEmpty()
  @IsString()
  slug: string;

  @IsString()
  @IsNotEmpty()
  methode: string;

  @IsString()
  @IsNotEmpty()
  datePaiement: Date;

  @IsString()
  @IsNotEmpty()
  montant: number;
}