import {  Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn  } from 'typeorm';
import { v4 as uuid} from 'uuid';

@Entity("laudo")
export class Laudo {

    @PrimaryColumn()
    id: string;

    @Column()
    tipo_droga:string;

    @Column()
    resultado: string;

    @Column()
    codigo_amostra: string;

}