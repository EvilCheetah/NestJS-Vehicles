import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MakeService } from './make.service';
import { CreateMakeDTO } from './dto/create-make.dto';
import { UpdateMakeDTO } from './dto/update-make.dto';


@Controller('make')
export class MakeController 
{
    constructor(private readonly makeService: MakeService) {}

    @Post()
    create(@Body() createMakeDTO: CreateMakeDTO) 
    {
        return this.makeService.create(createMakeDTO);
    }

    @Get()
    findAll() 
    {
        return this.makeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) 
    {
        return this.makeService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateMakeDTO: UpdateMakeDTO) 
    {
        return this.makeService.update(+id, updateMakeDTO);
    }

    @Delete(':id')
    remove(@Param('id') id: string) 
    {
        return this.makeService.remove(+id);
    }
}
