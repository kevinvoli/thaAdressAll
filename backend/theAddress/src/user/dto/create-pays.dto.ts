import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePaysDto{
  @IsString()
  @IsNotEmpty()
  nom: string
}