import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

console.log(Date.now());


@Entity()
export class Facture {
  @PrimaryGeneratedColumn({type: 'int', name:'id'})
  id: number;

  @Column()
  slug: string;

  @Column({type:'datetime', name:'date_facturation'})
  dateFacturation: Date;

  @Column({type:'int', name: 'total_ht'})
  totalHT: number;

  @Column({type:'int',  name: 'total_ttc'})
  totalTTC: number;

  @Column({type:'int',  name: 'total_tva'})
  totalTVA: number;

  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date

}