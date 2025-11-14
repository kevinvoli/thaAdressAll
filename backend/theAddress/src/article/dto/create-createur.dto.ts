import { IsNotEmpty, IsString } from "class-validator";

export class CreateCreateurDto{
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  slug: string;

  @IsNotEmpty()
  @IsString()
  website: string | null;

  @IsNotEmpty()
  @IsString()
  logo: string | null;
}