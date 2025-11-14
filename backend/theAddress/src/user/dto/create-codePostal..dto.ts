import { IsNotEmpty, IsString } from "class-validator";

export class CreateCodePostalDto{
  @IsNotEmpty()
  @IsString()
  code_postal: string
}