import { Model } from "src/model/entities/model.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Make 
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    make_name: string;

    @OneToMany(
        (type) => Model,
        model  => model.make
    )
    model: Model;
}
