import { Product } from 'src/article/entities/product.entity';
import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Approvisionnement {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "products_id", nullable: true })
  productsId: number | null;

  @Column("int", { name: "oldqty" })
  oldqty: number;

  @Column("int", { name: "newqty" })
  newqty: number;

  @Column("varchar", { name: "remarque", nullable: true, length: 500 })
  remarque: string | null;

  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date

  @ManyToOne(() => User, (user) => user.approvisionnements, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: User;

  @ManyToOne(()=>Product, (product) => product.approvisionnements,{
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  product: Product;
}