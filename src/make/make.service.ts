import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMakeDTO } from './dto/create-make.dto';
import { UpdateMakeDTO } from './dto/update-make.dto';
import { Make } from './entities/make.entity';


@Injectable()
export class MakeService 
{
    constructor(
        @InjectRepository(Make)
        private readonly makeRepository: Repository<Make>
    ) {}

    create(createMakeDTO: CreateMakeDTO) 
    {
        return 'This action adds a new make';
    }

    findAll() 
    {
        return `This action returns all make`;
    }

    findOne(id: number) 
    {
        return `This action returns a #${id} make`;
    }

    update(id: number, updateMakeDTO: UpdateMakeDTO) 
    {
        return `This action updates a #${id} make`;
    }

    remove(id: number) 
    {
        return `This action removes a #${id} make`;
    }
}
