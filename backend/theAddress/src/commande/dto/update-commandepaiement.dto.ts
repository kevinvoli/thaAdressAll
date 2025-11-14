import { PartialType } from "@nestjs/mapped-types";
import { CreateLivraisonDto } from './create-livraison.dto';
import { CreateCommandePaiement } from './create-commandePaiement.dto';

export class UpdateCommandePaiement extends PartialType(CreateCommandePaiement) {}