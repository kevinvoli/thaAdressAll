import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class ImageProduit{
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  nom:string;

  @Column()
  slug:string;

  @Column()
  ordre:string;

  @Column()
  url:string;

  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt: Date;

  @ManyToOne(()=>Product, (product)=>product.images)
  produit: Product
}