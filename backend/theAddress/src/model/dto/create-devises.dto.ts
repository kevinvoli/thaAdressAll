import { IsBoolean, IsDate, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateDeviseDto{
  @IsString()
  @IsNotEmpty()
  currencyCode: string | null;

  @IsNotEmpty()
  @IsString()
  currencyName: string | null;

  @IsNotEmpty()
  @IsString()
  leftSymbol: string | null;

  @IsNotEmpty()
  @IsString()
  rightSymbol: string | null;

  @IsNotEmpty()
  @IsString()
  decimalSymbol: string | null;

  @IsNotEmpty()
  @IsString()
  decimalPlace: string | null;

  @IsNotEmpty()
  @IsString()
  thousandsSeparator: string | null;

  @IsNotEmpty()
  @IsInt()
  exchangedValue: number | null;

  @IsNotEmpty()
  @IsBoolean()
  published: boolean | null;

  @IsNotEmpty()
  @IsDate()
  modifiedDate: Date | null;

  @IsNotEmpty()
  @IsInt()
  codeiso: number | null;
}