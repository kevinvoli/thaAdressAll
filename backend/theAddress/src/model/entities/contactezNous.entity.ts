import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Notification } from './notification.entity';

@Entity()
export class ContactezNous{

  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @Column("varchar", { name: "telephone", length: 255 })
  telephone: string;

  @Column("longtext", { name: "message" })
  message: string;

  @Column("int", { name: "countries_id", nullable: true })
  countriesId: number | null;

  @Column("varchar", { name: "nom", length: 255 })
  nom: string;

  @Column("varchar", { name: "prenoms", length: 255 })
  prenoms: string;

  @Column("varchar", { name: "demandes", length: 255 })
  demandes: string;

  @Column("tinyint", { name: "conditionsgenerales", width: 1 })
  conditionsgenerales: boolean;

  @Column("varchar", { name: "numcommande", nullable: true, length: 30 })
  numcommande: string | null;

  @Column("varchar", { name: "civilite", length: 20 })
  civilite: string;

  

  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date;

  @OneToMany(() => Notification, (notif) => notif.contact)
  notifications: Notification[]

}