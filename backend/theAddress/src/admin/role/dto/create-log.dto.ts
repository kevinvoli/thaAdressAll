import { IsNotEmpty, IsString } from 'class-validator';
export class CreateLogDto{

  @IsNotEmpty()
  @IsString()
  userId: number | null;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsString()
  action: string;

  @IsNotEmpty()
  @IsString()
  color: string;

  @IsNotEmpty()
  @IsString()
  icon: string | null;
  
}