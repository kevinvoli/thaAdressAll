import { IsNotEmpty, IsString, IsDate, IsInt } from 'class-validator';

export class CreateFactureDto{

  @IsString()
  @IsNotEmpty()
  slug: string;

  @IsDate()
  @IsNotEmpty()
  dateFacturation: Date;

  @IsInt()
  @IsNotEmpty()
  totalHT: number;

  @IsInt()
  @IsNotEmpty()
  totalTTC: number;

  @IsInt()
  @IsNotEmpty()
  totalTVA: number;
}