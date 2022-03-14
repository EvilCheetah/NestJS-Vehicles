import { Injectable } from '@nestjs/common';
import { CreateMakeDTO } from './dto/create-make.dto';
import { UpdateMakeDTO } from './dto/update-make.dto';

@Injectable()
export class MakeService {
  create(createMakeDTO: CreateMakeDTO) {
    return 'This action adds a new make';
  }

  findAll() {
    return `This action returns all make`;
  }

  findOne(id: number) {
    return `This action returns a #${id} make`;
  }

  update(id: number, updateMakeDTO: UpdateMakeDTO) {
    return `This action updates a #${id} make`;
  }

  remove(id: number) {
    return `This action removes a #${id} make`;
  }
}
