import { IncidentType } from "src/core/enums/incident-type.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("incident")
export class Incident{
    @PrimaryGeneratedColumn()
    id!:number;
    @Column()
    title!:string;
    @Column()
    description!:string;
    @Column({ type:'double' })
    lat!:number;
    @Column({ type:'double' })
    lon!:number;
    @Column({ type:'int' })
    type!:IncidentType;
}