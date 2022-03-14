import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Model } from './entities/model.entity';
import { CreateModelDTO } from './dto/create-model.dto';
import { UpdateModelDTO } from './dto/update-model.dto';


@Injectable()
export class ModelService 
{
    constructor(
            @InjectRepository(Model)
        private readonly modelRepository: Repository<Model>
    ) {}

    create(createModelDTO: CreateModelDTO): Promise<Model>
    {
        const model = this.modelRepository.create(createModelDTO);

        return this.modelRepository.save(model);
    }

    findAll() 
    {
        return this.modelRepository.find({
            relations: ['make']
        });
    }

    async findOne(id: number) 
    {
        const model = await this.modelRepository.findOne(
            id,
            { relations: ['make'] }
        );

        if ( !model )
            throw new NotFoundException(`Model with id: '${id}' was NOT FOUND`);
        
        return model;
    }

    async update(id: number, updateModelDTO: UpdateModelDTO) 
    {
        const model = await this.modelRepository.preload({
            id,
            ...updateModelDTO
        });

        if ( !model )
            throw new NotFoundException(`Model with id: '${id}' was NOT FOUND`);
        
        return model;
    }

    async remove(id: number) 
    {
        const model = await this.findOne(id);

        return this.modelRepository.remove(model);
    }
}
