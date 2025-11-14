import { IsInt, IsString } from "class-validator";

export class CreatePanierDto{
  @IsInt()
  @IsString()
  montantTotal: number;
}