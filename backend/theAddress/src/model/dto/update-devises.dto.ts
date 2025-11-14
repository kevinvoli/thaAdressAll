import { PartialType } from '@nestjs/mapped-types';
import { CreateDeviseDto } from './create-devises.dto';

export class UpdateDeviseDto extends PartialType(CreateDeviseDto) {}
