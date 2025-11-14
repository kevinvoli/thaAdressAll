import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateTvaDto{
  @IsNotEmpty()
  @IsInt()
  taux:number;

  @IsNotEmpty()
  @IsString()
  nom:string;

  @IsNotEmpty()
  @IsString()
  periodeTva:string;
}