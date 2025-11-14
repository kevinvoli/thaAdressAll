import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, OneToMany, BeforeUpdate } from 'typeorm';
import { Product } from '../../article/entities/product.entity';
import { User } from './user.entity';
import { Panier } from './panier.entity';

@Entity({name:'ligne_panier'})
export class LignePanier{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name:'nom_produit'})
  nomProduit: string;

  @Column({name:'quantite'})
  quantite: number;

  @Column({name:'prix_HT'})
  prixHt: number;

  @Column({name:'prix_Ttc'})
  prixTtc: number;

  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date;

  @ManyToOne(() => Product, (produit) => produit.lignePanier)
  produit: Product;

  @ManyToOne(() => Panier, (produit) => produit.ligne_panier)
  panier: Panier;
 


  @BeforeUpdate()
  async calculePrixTTC() {
    this.prixTtc =  await this.prixHt*this.quantite;
  }

}