import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { IsString } from "class-validator";

export class CreatePermitionDto{

  @IsString()
  @IsNotEmpty()
  created: boolean;

  @IsString()
  @IsNotEmpty()
  deleted: boolean;

  @IsString()
  @IsNotEmpty()
  updated: boolean;

  @IsString()
  @IsNotEmpty()
  read: boolean;
}