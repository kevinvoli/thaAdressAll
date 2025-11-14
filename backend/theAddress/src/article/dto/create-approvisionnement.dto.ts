import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateApprovisonnementDto{
  @IsNotEmpty()
  @IsInt()
  oldqty: number;

  @IsNotEmpty()
  @IsInt()
  newqty: number;

  @IsNotEmpty()
  @IsString()
  remarque: string | null;
}