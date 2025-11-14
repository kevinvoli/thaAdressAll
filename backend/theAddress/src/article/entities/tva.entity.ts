import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Product } from './product.entity';
@Entity()
export class Tva{
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  taux:number;

  @Column()
  nom:string;

  @Column()
  periodeTva:string;

  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date

  @OneToMany(() => Product, (produit) => produit.tva)
  produit:Product[];
  
}