import { Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, OneToMany, Entity } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Commande } from './commande.entity';
import { Ligne } from './ligne.entity';

@Entity()
export class Livraison {
  @PrimaryGeneratedColumn({type: 'int'})
  id: number;

  @Column({name: 'frait_Expedition'})
  fraitExpedition: number;

  @Column({name: 'nom_livreur'})
  nomLivreur: string;

  @Column({type:'datetime', name:'date_Envoir'})
  dateEnvoir: Date

  @Column({name:'numero_suivie'})
  numeroSuivie:number;

  @Column({type:'datetime', name:'estimation_date'})
  estimationDate:Date

  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date;

  @OneToMany( () => Commande, (commande) => commande.livraison)
  commandes: Commande[];
  
  @OneToMany(() => Ligne,(ligne) => ligne.livraison)
  ligne_Achat: Ligne[];


  
}