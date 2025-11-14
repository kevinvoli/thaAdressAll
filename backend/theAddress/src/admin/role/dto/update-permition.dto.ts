import { PartialType } from '@nestjs/mapped-types';
import { CreatePermitionDto } from './create-permition.dto';

export class UpdateRoleDto extends PartialType(CreatePermitionDto) {}
