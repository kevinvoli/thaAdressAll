import { IsBoolean, IsNotEmpty, IsString, IsNumber, IsInt } from 'class-validator';
export class CreateAccueilleSlideDto{
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  url: string | null;

  @IsNotEmpty()
  @IsString()
  filename: string | null;

  @IsBoolean()
  @IsNotEmpty()
  online: boolean | null;

  @IsInt()
  @IsNotEmpty()
  ordre: number;
}