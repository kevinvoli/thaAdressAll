import { PartialType } from '@nestjs/mapped-types';
import { CreateCarteCadeauDto } from './create-carteCadeau.dto';


export class UpdateCarteCadeauDto extends PartialType(CreateCarteCadeauDto) {}
