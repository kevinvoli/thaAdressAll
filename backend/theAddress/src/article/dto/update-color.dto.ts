import { PartialType } from '@nestjs/mapped-types';
import { CreateColorsDto } from './create-color.dto';

export class UpdateColorsDto extends PartialType(CreateColorsDto) {}
