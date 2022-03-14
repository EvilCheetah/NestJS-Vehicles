import { Make } from "src/make/entities/make.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Model 
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    model_name: string;

    @ManyToOne( 
        (type) => Make,
        make => make.id
    )
    make: Make;

}
