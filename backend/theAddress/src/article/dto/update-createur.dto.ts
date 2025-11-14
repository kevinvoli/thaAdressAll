import { PartialType } from '@nestjs/mapped-types';
import { CreateCreateurDto } from './create-createur.dto';

export class UpdateCreateurDto extends PartialType(CreateCreateurDto) {}
