import { Approvisionnement } from 'src/article/entities/approvisionnement.entity';
import { Column, OneToMany, PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from 'typeorm';
import { Matiere } from './matieres.entity';
import { Colors } from './colors.entity';
import { Createur } from './createur.entity';
import { CarteCadeau } from '../../model/entities/carteCadeau.entiy';
import { Commentairs } from '../../model/entities/commentairs.entity';
import { Atribut } from '../../model/entities/Atribut.entity';
import { Categorie } from './categorie.entity';
import { LignePanier } from '../../user/entities/lignePanier.entity';
import { Tva } from './tva.entity';
import { Ligne } from '../../commande/entities/ligne.entity';
import { ImageProduit } from './produitImage.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column({type:'varchar', name: "name", length: 255 })
  name: string;

  @Column({ type:'varchar', name: "slug", length: 255 })
  slug: string;

  @Column({type:'varchar', name: "weight", nullable: true, length: 255 })
  weight: string | null;

  @Column( {type:'longtext', name: "description", nullable: true })
  description: string | null;

  @Column({
    type:'boolean',
    name: "online",
    nullable: true,
    width: 1,
  })
  online: boolean | null;

  @Column("int", { name: "vues",default:()=> 0 })
  vues: number;

  @Column("varchar", { name: "garantie", nullable: true, length: 255 })
  garantie: string | null;

  @Column( {
    name: "priceeuro",
    nullable: true,
    precision: 22,
  })
  price: number | null;

  @Column("varchar", { name: "modele", nullable: true, length: 255 })
  modele: string | null;




  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date;



  @OneToMany(() => Approvisionnement,(approvisionnements) => approvisionnements.product)approvisionnements: Approvisionnement[];

  @OneToMany(() => CarteCadeau,(cartecadeau) => cartecadeau.product)
  carteCadeau: CarteCadeau[];

  @ManyToOne(()=>Matiere, (matiers) => matiers.product)
  matiere: Matiere;

  @ManyToOne(()=>Colors, (colors) => colors.product)
  colors: Colors;

  @ManyToOne(()=>Createur, (marque) => marque.product)
  createur: Matiere;

  @OneToMany(() => Commentairs,(commentair) => commentair.product)
  commentair: Commentairs[];

  @OneToMany(() => Atribut,(atribut) => atribut.product)
  atributs: Atribut[];

  @ManyToOne(()=> Categorie, (categorie) => categorie.product)
  categorie: Categorie

  @OneToMany(() => LignePanier, (lignes) => lignes.produit)
  lignePanier:LignePanier[];

  @ManyToOne(() => Tva, (tva) => tva.produit)
  tva: Tva;

  @OneToMany(() => Ligne,(ligne) => ligne.product)
  ligneAchat: Ligne[];

  @OneToMany(()=>ImageProduit, (images)=>images.produit)
  images:ImageProduit[];


}