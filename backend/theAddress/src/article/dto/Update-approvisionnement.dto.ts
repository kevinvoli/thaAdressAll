import { PartialType } from '@nestjs/mapped-types';
import { CreateCategorieDto } from './create-categorie.dto';
import { CreateApprovisonnementDto } from './create-approvisionnement.dto';

export class UpdateApprovisionnementDto extends PartialType(CreateApprovisonnementDto) {}
