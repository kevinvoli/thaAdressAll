import { PartialType } from '@nestjs/mapped-types';
import { CreateCommentairsDto } from './create-commentairs.dto';


export class UpdateCommentairsDto extends PartialType(CreateCommentairsDto) {}
