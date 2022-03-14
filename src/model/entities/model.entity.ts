import { Make } from "src/make/entities/make.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId } from "typeorm";


@Entity()
export class Model 
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    model_name: string;

    @ManyToOne( 
        (type) => Make
    )
    @JoinColumn({ name: 'make_id' })
    make: Make;

    @RelationId( (model: Model) => model.make )
    make_id: number;
}
