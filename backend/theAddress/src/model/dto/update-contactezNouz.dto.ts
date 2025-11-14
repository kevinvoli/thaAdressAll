import { PartialType } from '@nestjs/mapped-types';
import { CreateContactezNousDto } from './create-contactezNouz.dto';


export class UpdateContactezNousDto extends PartialType(CreateContactezNousDto) {}
