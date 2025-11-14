import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Commande } from '../../commande/entities/commande.entity';
@Entity()
export class AddressFact {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "adresse", length: 255 })
  adresse: string;

  @Column("varchar", { name: "contacts", length: 255 })
  contacts: string;

  @Column("int", { name: "countries_id", nullable: true })
  countriesId: number | null;

  @Column("varchar", { name: "appartements", nullable: true, length: 255 })
  appartements: string | null;

  @Column("varchar", { name: "entreprise", nullable: true, length: 255 })
  entreprise: string | null;

  @Column("varchar", { name: "numero_rue", nullable: true, length: 255 })
  numeroRue: string | null;


  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date

  @ManyToOne(() => User, (users) => users.addressFact)
  user: User

  @OneToMany(()=> Commande, (commande) => commande.address)
  commande: AddressFact[];
}
