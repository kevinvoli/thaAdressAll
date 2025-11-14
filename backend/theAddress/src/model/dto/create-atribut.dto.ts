import { IsInt, IsNotEmpty } from "class-validator";

export class CreateatributDto{
  @IsInt()
  @IsNotEmpty()
  productsId: number | null;

  @IsInt()
  @IsNotEmpty()
  quantity: number;

  @IsInt()
  @IsNotEmpty()
  price: number;
  
}