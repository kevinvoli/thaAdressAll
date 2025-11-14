import { IsNotEmpty } from "class-validator";

export class CreateCommentairsDto{
  @IsNotEmpty()
  enabled: boolean;

  @IsNotEmpty()
  message: string;

  @IsNotEmpty()
  createdAt: Date;

  @IsNotEmpty()
  updatedAt: Date;

  @IsNotEmpty()
  delectedAt:Date;
}