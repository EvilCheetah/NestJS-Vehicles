import { IsNotEmpty, IsString } from "class-validator";


export class CreateMakeDTO 
{
    @IsString()
    @IsNotEmpty()
    make_name: string;
}
