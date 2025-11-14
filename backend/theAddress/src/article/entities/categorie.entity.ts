import { Column, PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToMany, JoinTable, PrimaryColumn, OneToMany, ManyToOne } from 'typeorm';
import { Product } from './product.entity';


@Entity()
export class Categorie {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column( { name: "name", length: 255 })
  name: string;

  @Column({ name: "slug", length: 255 })
  slug: string;

  @Column({ name: "filename", nullable: true, length: 255 })
  filename: string | null;

  @Column({ name: "ordre", default: () => "'0'" })
  ordre: number;

  @Column( { name: "solde", nullable: true, width: 1 })
  solde: boolean | null;

  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date


  @OneToMany(()=>Product, (produit) => produit.categorie)
  product: Product

  @ManyToOne(() => Categorie, (category) => category.childCategories, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  parentCategory?: Categorie;

  @OneToMany(() => Categorie, (category) => category.parentCategory, {
    onDelete: 'SET NULL',
    cascade:true
  })
  childCategories: Categorie[];

}
