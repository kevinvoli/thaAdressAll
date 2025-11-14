import { PartialType } from '@nestjs/mapped-types';
import { CreateCodePostalDto } from './create-codePostal..dto';

export class UpdateCodePostal extends PartialType(CreateCodePostalDto) {}
