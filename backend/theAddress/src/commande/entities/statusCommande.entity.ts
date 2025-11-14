import { Column, PrimaryGeneratedColumn, Entity, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { Commande } from './commande.entity';


@Entity()
export class  StatusCommande {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", unique: true, length: 100 })
  name: string;

  @Column("varchar", { name: "color", length: 100 })
  color: string;

  @OneToMany(() => Commande, (commande) => commande.status)
  commandes: Commande[];

  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date
}