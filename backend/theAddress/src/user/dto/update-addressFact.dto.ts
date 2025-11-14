import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { CreateAdressFactDto } from './Create-addressFact.dto';

export class UpdateAddressFactDto extends PartialType(CreateAdressFactDto) {}
