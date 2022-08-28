import {  Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn  } from 'typeorm';
import { v4 as uuid} from 'uuid';

@Entity("drogas")
export class Drogas {

    @PrimaryColumn()
    id: string;

    @Column()
    tipo_droga:string;

}