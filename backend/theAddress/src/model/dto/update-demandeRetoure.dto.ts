import { PartialType } from '@nestjs/mapped-types';
import { CreateDemandeRetoureDto } from './create-demandeRetoure.dto';

export class UpdateDemandeRetoureDto extends PartialType(CreateDemandeRetoureDto) {}
