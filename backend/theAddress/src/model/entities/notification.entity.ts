import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Commande } from '../../commande/entities/commande.entity';
import { ContactezNous } from './contactezNous.entity';
@Entity()
export class Notification{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  object: string;

  @Column()
  message: string;

  @Column("varchar", { name: "titre", length: 100 })
  titre: string;

  @Column("varchar", { name: "action", length: 100 })
  action: string;

  @Column("varchar", { name: "icon", length: 20 })
  icon: string;

  @Column("tinyint", { name: "reading", width: 1 })
  reading: boolean;


  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date


  @ManyToOne(()=> User, (users)=> users.notification)
  users: User;

  @ManyToOne(() => Commande, (commande) => commande.notifications)
  commande: Commande

  @ManyToOne(() => ContactezNous, (contacte) => contacte.notifications)
  contact: ContactezNous

}