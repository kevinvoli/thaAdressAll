import { Column, PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Createur{
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 100 })
  name: string;

  @Column("varchar", { name: "slug", unique: true, length: 100 })
  slug: string;

  @Column("varchar", { name: "website", nullable: true, length: 199 })
  website: string | null;

  @Column("varchar", { name: "filename", nullable: true, length: 199 })
  logo: string | null;

  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date;


  @OneToMany(()=> Product, (product) => product.createur)
  product: Product[];
}