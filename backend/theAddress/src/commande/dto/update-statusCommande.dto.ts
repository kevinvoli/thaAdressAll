import { PartialType } from "@nestjs/mapped-types";
import { CreateStatusCommandeDto } from './create-statusCommande.dto';

export class UpdateStatusComande extends PartialType(CreateStatusCommandeDto) {}
