import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { Product } from '../../article/entities/product.entity';
import { Livraison } from './livraison.entity';
import { Commande } from './commande.entity';

@Entity()
export class Ligne {
  @PrimaryGeneratedColumn()
  id:number

  @Column()
  nomProduit:string

  @Column()
  prix_unitaire:string

  @Column({type:'int'})
  quantite:number

  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date;
  
  @ManyToOne(() => Product, (product) => product.ligneAchat)
  product: Product;

  @ManyToOne(() => Livraison,(livraison) => livraison.ligne_Achat)
  livraison: Livraison;

  @ManyToOne(() => Commande,(commande) => commande.ligne)
  commande: Commande;

  
}