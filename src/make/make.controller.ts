import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MakeService } from './make.service';

import { Make } from './entities/make.entity';
import { CreateMakeDTO } from './dto/create-make.dto';
import { UpdateMakeDTO } from './dto/update-make.dto';


@Controller('make')
export class MakeController 
{
    constructor(private readonly makeService: MakeService) {}

    @Post()
    create(@Body() createMakeDTO: CreateMakeDTO): Promise<Make>
    {
        return this.makeService.create(createMakeDTO);
    }

    @Get()
    findAll(): Promise<Make[]>
    {
        return this.makeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Make>
    {
        return this.makeService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateMakeDTO: UpdateMakeDTO): Promise<Make>
    {
        return this.makeService.update(+id, updateMakeDTO);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<Make>
    {
        return this.makeService.remove(+id);
    }
}
