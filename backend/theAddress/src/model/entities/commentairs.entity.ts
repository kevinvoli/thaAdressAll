import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Product } from '../../article/entities/product.entity';
import { User } from '../../user/entities/user.entity';
// import { Article } from '../../article/entities/article.entity';
 @Entity()
export class Commentairs{
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column({ name: "enabled", type:'boolean',default:false })
  enabled: boolean;

  @Column("longtext", { name: "message" })
  message: string;


  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date;


  @ManyToOne(()=>Product, (product) => product.commentair)
  product: Product;

  // @ManyToOne(()=>Article, (product) => product.commentair)
  // article: Article;

  @ManyToOne(()=>User, (users) => users.commentair)
  user: User;
}