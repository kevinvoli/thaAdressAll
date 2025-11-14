import { PartialType } from '@nestjs/mapped-types';
import { CreateContactezNousDto } from './create-contactezNouz.dto';
import { CreateDemandeAnnulationDto } from './create-demandeAnnulation.dto';


export class UpdateDemandeAnnulation extends PartialType(CreateDemandeAnnulationDto) {}
