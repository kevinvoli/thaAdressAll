import { IsNotEmpty, IsString } from "class-validator";

export class CreateAuthDto {
  @IsNotEmpty()
  @IsString()
  mail: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
