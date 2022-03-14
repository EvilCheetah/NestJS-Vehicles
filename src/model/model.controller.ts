import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ModelService } from './model.service';

import { Model } from './entities/model.entity';
import { CreateModelDTO } from './dto/create-model.dto';
import { UpdateModelDTO } from './dto/update-model.dto';


@Controller('model')
export class ModelController 
{
    constructor(private readonly modelService: ModelService) {}

    @Post()
    create(@Body() createModelDTO: CreateModelDTO): Promise<Model>
    {
        return this.modelService.create(createModelDTO);
    }

    @Get()
    findAll(): Promise<Model[]>
    {
        return this.modelService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Model>
    {
        return this.modelService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateModelDTO: UpdateModelDTO): Promise<Model>
    {
        return this.modelService.update(+id, updateModelDTO);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<Model>
    {
        return this.modelService.remove(+id);
    }
}
