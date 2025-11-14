import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Product } from './product.entity';
import { Atribut } from '../../model/entities/Atribut.entity';

@Entity()
export class Colors{
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "slug", length: 255 })
  slug: string;

  @Column("varchar", { name: "colorvalue", length: 30 })
  colorvalue: string;


  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date
  
  @OneToMany(()=> Product, (product) => product.colors)
  product: Product[];

  @OneToMany(() => Atribut,(atribut) => atribut.product)
  atributs: Atribut[];

}
