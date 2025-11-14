import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateRoleDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description:string;

  @IsNumber()
  permition:number;
}
