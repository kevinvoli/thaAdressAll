import { PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, UpdateDateColumn, DeleteDateColumn, CreateDateColumn, ManyToOne, Entity, OneToOne, OneToMany } from 'typeorm';
// import { Article } from '../../article/entities/article.entity';
import { User } from './user.entity';
import { LignePanier } from './lignePanier.entity';

@Entity()
export class Panier {
  @PrimaryGeneratedColumn({type:'int'})
  id:number;

  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date

  @OneToOne(() => User, (user) => user.panier)
  users: User;

  @OneToMany(() => LignePanier, (lignePa)=> lignePa.panier)
  ligne_panier: LignePanier[]

}
