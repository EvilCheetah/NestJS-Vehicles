import { PartialType } from '@nestjs/mapped-types';
import { CreateModelDTO } from './create-model.dto';


export class UpdateModelDTO extends PartialType(CreateModelDTO) {}
