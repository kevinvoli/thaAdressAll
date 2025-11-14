import { PartialType } from '@nestjs/mapped-types';
import { CreatePaysDto } from './create-pays.dto';
import { CreatePanierDto } from './create-panier.dto';

export class UpdatePanierDto extends PartialType(CreatePanierDto) {}
