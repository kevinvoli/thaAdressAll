import { IsNotEmpty, IsString } from "class-validator";

export class CreateColorsDto{
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  slug: string;

  @IsNotEmpty()
  @IsString()
  colorvalue: string;
}