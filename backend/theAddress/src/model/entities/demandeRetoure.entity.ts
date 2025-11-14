import { PrimaryGeneratedColumn, Entity, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Commande } from '../../commande/entities/commande.entity';


@Entity()
export class DemandeRetoure{
  
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("int", { name: "commandes_id", nullable: true })
  commandesId: number | null;

  @Column("longtext", { name: "motifs" })
  motifs: string;

  @Column("tinyint", { name: "active", width: 1 })
  active: boolean;

  @Column("longtext", {
    name: "products",
    nullable: true,
    comment: "(DC2Type:array)",
  })
  products: string | null;

  @Column("tinyint", { name: "annuler", width: 1 })
  annuler: boolean;

  @Column("datetime", {
    name: "cancel_at",
    nullable: true,
    comment: "(DC2Type:datetime_immutable)",
  })
  cancelAt: Date | null;

  @Column("varchar", { name: "origine", length: 255 })
  origine: string;

  @Column("varchar", { name: "pays", length: 255 })
  pays: string;

  @Column("varchar", { name: "etat", length: 255 })
  etat: string;

  @Column("varchar", { name: "ville", length: 255 })
  ville: string;

  @Column("longtext", { name: "adresse" })
  adresse: string;

  @Column("varchar", { name: "codepostal", length: 255 })
  codepostal: string;

  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @Column("varchar", { name: "contact", length: 255 })
  contact: string;

  @Column("tinyint", { name: "is_non_conforme", nullable: true, width: 1 })
  isNonConforme: boolean | null;

  @Column("tinyint", { name: "is_defectueux", nullable: true, width: 1 })
  isDefectueux: boolean | null;

  

  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date;



  @ManyToOne(()=> User, (users) => users.demandeAnnulation)
  user: User;

  @ManyToOne(()=> Commande, (commande) => commande.demandeAnnulation)
  commande: User;
  
}