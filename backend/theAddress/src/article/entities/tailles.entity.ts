import { Column, PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, OneToOne } from 'typeorm';
import { Atribut } from '../../model/entities/Atribut.entity';
import { Formataille } from './formataille.entity';


@Entity()
export class Tailles{
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "format_id", nullable: true })
  formatId: number | null;


  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date

  @OneToMany(() => Atribut,(atribut) => atribut.product)
  atributs: Atribut[];

  @OneToOne(()=> Formataille, (format) => format.taille)
  format: Formataille;


  
}