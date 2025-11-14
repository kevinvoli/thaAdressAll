import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateFormatailleDto{
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  ordre: number | null;

  @IsNotEmpty()
  @IsString()
  language: string

  @IsNotEmpty()
  @IsString()
  slug:string
}