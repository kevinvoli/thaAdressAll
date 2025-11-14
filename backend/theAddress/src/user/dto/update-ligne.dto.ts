import { PartialType } from '@nestjs/mapped-types';
import { CreateLigneDto } from '../../commande/dto/create-ligne.dto';

export class UpdateLignePanierDto extends PartialType(CreateLigneDto) {}
