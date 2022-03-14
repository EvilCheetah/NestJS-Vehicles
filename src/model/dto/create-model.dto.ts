import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateModelDTO 
{
    @IsNumber()
    @IsNotEmpty()
    make_id:    number;

    @IsString()
    @IsNotEmpty()
    model_name: string;
}
