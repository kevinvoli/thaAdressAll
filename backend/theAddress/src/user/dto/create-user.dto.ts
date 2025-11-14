import { IsEmail, isNotEmpty, IsNotEmpty, isString, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  
  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  contact: number

  @IsNotEmpty()
  @IsString()
  nom: string | null;

  @IsNotEmpty()
  @IsString()
  prenoms: string | null;

  @IsNotEmpty()
  @IsString()
  contacts: string | null;

  // @IsNotEmpty()
  @IsString()
  address: string;

  // @IsNotEmpty()
  @IsString()
  lastLogin: Date | null;

  // @IsNotEmpty()
  @IsString()
  lastActivity: Date | null;

  // @IsNotEmpty()
  @IsString()
  entreprise: string | null;

  // @IsNotEmpty()
  @IsString()
  appartements: string | null;

  // @IsNotEmpty()
  @IsString()
  civilite: string;

  // @IsNotEmpty()
  @IsString()
  numeroRue: string | null;

  // @IsNotEmpty()
  @IsString()
  postalCode: string | null;

  @IsNotEmpty()
  @IsString()
  pays:string

  @IsNotEmpty()
  ville:string
  
  @IsString()
  photo:string

}
