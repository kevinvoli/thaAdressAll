import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateNotificationDto{
  @IsNotEmpty()
  @IsString()
  object: string;

  @IsNotEmpty()
  @IsString()
  message: string;

  @IsNotEmpty()
  @IsString()
  titre: string;

  @IsNotEmpty()
  @IsString()
  action: string;

  @IsNotEmpty()
  @IsString()
  icon: string;

  @IsNotEmpty()
  @IsBoolean()
  reading: boolean;
  
}