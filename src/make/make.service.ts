import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { throws } from 'assert';
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

    create(createMakeDTO: CreateMakeDTO): Promise<Make>
    {
        const make = this.makeRepository.create(createMakeDTO);
        return this.makeRepository.save(make);
    }

    findAll(): Promise<Make[]>
    {
        return this.makeRepository.find();
    }

    async findOne(id: number): Promise<Make>
    {
        const make = await this.makeRepository.findOne(id);

        if ( !make )
            throw new NotFoundException(`Make with id: '${id}' was NOT FOUND`);

        return make;
    }

    async update(id: number, updateMakeDTO: UpdateMakeDTO): Promise<Make>
    {
        const make = await this.makeRepository.preload({
            id: id,
            ...updateMakeDTO
        });

        if ( !make )
            throw new NotFoundException(`Make with id: '${id}' was NOT FOUND`);
        
        return this.makeRepository.save(make);
    }

    async remove(id: number): Promise<Make>
    {
        const make = await this.makeRepository.findOne(id);

        return this.makeRepository.remove(make);
    }
}
