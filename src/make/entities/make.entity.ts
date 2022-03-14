import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Make 
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    make_name: string;
}
