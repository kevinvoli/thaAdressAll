import { Column, PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToOne } from 'typeorm';
import { Tailles } from './tailles.entity';


@Entity()
export class Formataille{
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 10 })
  name: string;

  @Column("int", { name: "ordre", nullable: true })
  ordre: number | null;

  @Column()
  language: string

  @Column()
  slug:string
  

  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date;

  @OneToOne(()=> Tailles, (taille)=> taille.format)
  taille:Tailles
}