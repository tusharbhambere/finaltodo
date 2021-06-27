import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("todo")
export class Todo{
    @PrimaryGeneratedColumn("increment")
    id!:string

    @Column ({
        nullable:true,
        unique:false
    })title!:string

    @Column ({
        nullable:true,
        unique:false
    })description!:string
}