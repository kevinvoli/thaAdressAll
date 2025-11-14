import { IsNotEmpty, IsInt, IsString, IsDate } from 'class-validator';
export class CreateLivraisonDto{
  @IsInt()
  @IsNotEmpty()
  fraitExpedition: number;

  @IsString()
  @IsNotEmpty()
  nomLivreur: string;
  @IsDate()
  @IsNotEmpty()
  dateEnvoir: Date;

  @IsInt()
  @IsNotEmpty()
  numeroSuivie:number;

  @IsDate()
  @IsNotEmpty()
  estimationDate:Date;

}