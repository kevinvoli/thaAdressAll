import { IsNotEmpty, IsString } from "class-validator";

export class CreateMatierDto{
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  slug: string;
  
  @IsNotEmpty()
  @IsString()
  description: string; 
}