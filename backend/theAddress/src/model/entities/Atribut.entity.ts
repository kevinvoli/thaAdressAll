import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany, DeleteDateColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { Product } from '../../article/entities/product.entity';
import { Tailles } from '../../article/entities/tailles.entity';
import { Colors } from '../../article/entities/colors.entity';

@Entity()
export class Atribut{
  @PrimaryGeneratedColumn()
  id: number;
  @Column("int", { name: "products_id", nullable: true })
  productsId: number | null;

  @Column("int", { name: "quantity" })
  quantity: number;

  @Column({type:'int', name: "price", })
  price: number;

  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date;
  

  @ManyToOne(()=> Product, (product)=> product.atributs)
  product: Product;

  @ManyToOne(() => Tailles, (tailles) => tailles.atributs)
  tailles: Tailles

  @ManyToOne(() => Colors, (couleur) => couleur.atributs)
  couleur: Colors
}