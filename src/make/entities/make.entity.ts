import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Make 
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    make_name: string;
}
