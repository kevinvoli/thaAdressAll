import { IsNotEmpty, IsString } from 'class-validator';
export class CreateStatusCommandeDto{

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  color: string;
}