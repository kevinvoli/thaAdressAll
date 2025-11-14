import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, ManyToMany, ManyToOne } from 'typeorm';
import { Commande } from '../../commande/entities/commande.entity';
import { User } from '../../user/entities/user.entity';
@Entity()
export class DemandeAnnulation{
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("int", { name: "commandes_id", nullable: true })
  commandesId: number | null;

  @Column("longtext", { name: "motifs", nullable: true })
  motifs: string | null;

  @Column("longtext", {
    name: "products",
    nullable: true,
    comment: "(DC2Type:array)",
  })
  products: string | null;

  @Column("tinyint", { name: "is_taille", nullable: true, width: 1 })
  isTaille: boolean | null;

  @Column("tinyint", {
    name: "is_change_modepaiement",
    nullable: true,
    width: 1,
  })
  isChangeModepaiement: boolean | null;

  @Column("tinyint", { name: "is_tromper", nullable: true, width: 1 })
  isTromper: boolean | null;

  @Column("tinyint", { name: "is_change_avis", nullable: true, width: 1 })
  isChangeAvis: boolean | null;

  @Column("tinyint", { name: "is_autre", nullable: true, width: 1 })
  isAutre: boolean | null;

  @Column("tinyint", { name: "is_active", nullable: true, width: 1 })
  isActive: boolean | null;

  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date;


  @ManyToOne(()=> Commande, (commande) => commande.demandeAnnulation)
  commande: Commande;


  @ManyToOne(()=> User, (users) => users.demandeAnnulation)
  user: User;


}