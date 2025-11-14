import { Column, PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Commande } from '../../commande/entities/commande.entity';
import { Product } from '../../article/entities/product.entity';

@Entity()
export class CarteCadeau{
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nomprenoms", length: 255 })
  nomprenoms: string;

  @Column("varchar", { name: "nomprenomsbeneficiaire", length: 255 })
  nomprenomsbeneficiaire: string;

  @Column("varchar", { name: "emailbeneficiaire", length: 255 })
  emailbeneficiaire: string;

  @Column("longtext", { name: "message", nullable: true })
  message: string | null;

  @Column("varchar", { name: "codecoupon", unique: true, length: 30 })
  codecoupon: string;

  @Column("tinyint", { name: "couponused", width: 1, default: () => "'0'" })
  couponused: boolean;

  @Column("double", {
    name: "total_relicat",
    nullable: true,
    default: () => "'0'",
  })
  totalRelicat: number | null;

  @Column("double", {
    name: "montant",
    nullable: true,
    default: () => "'0'",
  })
  montant: number | null;


  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date;


  @ManyToOne(() => User, (users) => users.carteCadeau)
  users: User;

  @ManyToOne(() => Commande, (commande) => commande.carteCaodeau )
  commande: Commande;

  @ManyToOne(() => Product, (product) => product.carteCadeau )
  product: Product;
  
}