import { User } from "../../user/entities/user.entity";
import { Column, ManyToOne, PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, OneToOne, JoinColumn, JoinTable, ManyToMany } from 'typeorm';
import { StatusCommande } from './statusCommande.entity';
import { Livraison } from './livraison.entity';
import { Facture } from './facturre.entity';
// import { Article } from '../../article/entities/article.entity';
import { CommandePaiemant } from './commandePaiement.entity';
import { CarteCadeau } from '../../model/entities/carteCadeau.entiy';
import { DemandeAnnulation } from '../../model/entities/demandeAnnulation.entity';
import { DemandeRetoure } from '../../model/entities/demandeRetoure.entity';
import { Notification } from '../../model/entities/notification.entity';
import { AddressFact } from '../../user/entities/address-fact.entity';
import { Ligne } from './ligne.entity';


@Entity()
export class Commande {

  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column({ name: "reference", nullable: true, length: 20 })
  slug: string | null;

  @Column( { name: "date" })
  date: string;

  @Column( { name: "valider", width: 1 })
  valider: boolean;

  @Column( { name: "chiffreenlettre", length: 500 })
  chiffreenlettre: string;

  @Column( { name: "note", nullable: true, length: 255 })
  note: string | null;

  @Column( { name: "notif", width: 1 })
  notif: boolean;

  @Column("int", { name: "currencies_id", nullable: true })
  currenciesId: number | null;

  @Column("tinyint", { name: "checkouttermsagree", nullable: true, width: 1 })
  checkouttermsagree: boolean | null;

  @Column("varchar", { name: "codecoupon", nullable: true, length: 30 })
  codecoupon: string | null;

  @Column("datetime", {
    name: "cancel_at",
    nullable: true,
    comment: "(DC2Type:datetime_immutable)",
  })
  cancelAt: Date | null;

  @Column("datetime", {
    name: "cancel_delay",
    nullable: true,
    comment: "(DC2Type:datetime_immutable)",
  })
  cancelDelay: Date | null;


  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date
 

  @ManyToOne(()=> User, (user)=> user.commande)
  users: User;

  @ManyToOne(()=> StatusCommande, (status)=> status.commandes)
  status: StatusCommande;

  @ManyToOne(() => Livraison, (livraison) => livraison.commandes)
  livraison: Livraison;

  @OneToMany(() => CommandePaiemant, (paie) =>paie.commande)
  paiements: CommandePaiemant;

  @OneToOne(() => Facture)
  @JoinColumn()
  facture: Facture;


  @ManyToOne(() => CarteCadeau, (cartecadeau) => cartecadeau.commande)
  carteCaodeau: CarteCadeau[]

  @OneToMany(()=> DemandeAnnulation, (demande) => demande.commande)
  demandeAnnulation: DemandeAnnulation[];

  @OneToMany(()=> DemandeRetoure, (demande) => demande.commande)
  demandeRetoure: DemandeRetoure[];

  @OneToMany(()=> Notification, (notif) => notif.commande)
  notifications: Notification[];

  @ManyToOne(()=>AddressFact, (address)=>address.commande)
  address: AddressFact

  @OneToMany(()=> Ligne, (ligne) => ligne.commande)
  ligne: Ligne[];
  
}
