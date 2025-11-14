// import { Column, PrimaryGeneratedColumn, Entity, JoinTable, ManyToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm';
// import { Categorie } from './categorie.entity';
// import { Commande } from '../../commande/entities/commande.entity';
// import { Commentairs } from '../../model/entities/commentairs.entity';


// @Entity()
// export class Article {
//   @PrimaryGeneratedColumn({ type: "int", name: "id" })
//   id: number;

//   @Column("int", { name: "featured_image_id", nullable: true })
//   featuredImageId: number | null;

//   @Column("varchar", { name: "title", length: 255 })
//   title: string;

//   @Column("varchar", { name: "slug", length: 255 })
//   slug: string;

//   @Column("longtext", { name: "content", nullable: true })
//   content: string | null;

//   @Column("varchar", { name: "featured_text", nullable: true, length: 100 })
//   featuredText: string | null;

//   @CreateDateColumn({type:'datetime',  name: 'created_at'})
//   createdAt: Date;

//   @UpdateDateColumn({type:'datetime', name: 'updated_at'})
//   updatedAt: Date;

//   @DeleteDateColumn({type:'datetime', name: 'delected_at'})
//   delectedAt:Date

//   @Column("varchar", { name: "filename", nullable: true, length: 255 })
//   filename: string | null;

//   @OneToMany(() => Commentairs,(commentair) => commentair.product)
//   commentair: Commentairs[];
  
// }
