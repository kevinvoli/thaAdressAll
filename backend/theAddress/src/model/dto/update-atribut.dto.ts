import { PartialType } from '@nestjs/mapped-types';
import { CreateatributDto } from './create-atribut.dto';


export class UpdateAtributDto extends PartialType(CreateatributDto) {}
