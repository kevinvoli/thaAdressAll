import { PrimaryGeneratedColumn, Entity, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from 'typeorm';
import { Commande } from './commande.entity';


@Entity()
export class CommandePaiemant {
  @PrimaryGeneratedColumn({type:'int', name:'id'})
  id:number;

  @Column()
  slug: string;

  @Column()
  methode: string;

  @Column({type: 'datetime'})
  datePaiement: Date;

  @Column()
  montant: number;

  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date;
  

  @ManyToOne(() => Commande, (commande) => commande.paiements)
  commande: Commande;

}