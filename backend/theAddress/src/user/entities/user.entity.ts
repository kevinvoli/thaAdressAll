import { Commande } from '../../commande/entities/commande.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, OneToOne, JoinColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import { Role } from '../../admin/role/entities/role.entity';
import { AddressFact } from './address-fact.entity';
import { Approvisionnement } from 'src/article/entities/approvisionnement.entity';
import { Notification } from '../../model/entities/notification.entity';
import { CarteCadeau } from '../../model/entities/carteCadeau.entiy';
import { Commentairs } from '../../model/entities/commentairs.entity';
import { DemandeAnnulation } from '../../model/entities/demandeAnnulation.entity';
import { DemandeRetoure } from '../../model/entities/demandeRetoure.entity';
import { Panier } from './panier.entity';
import * as bcrypt from 'bcrypt';


@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "email", unique: true, length: 180 })
  email: string;

  @Column("varchar", { name: "password", length: 255, select:true })
  password: string;

  @Column("varchar", { name: "nom", nullable: true, length: 255 })
  nom: string | null;

  @Column("varchar", { name: "prenoms", nullable: true, length: 255 })
  prenoms: string | null;

  @Column("varchar", { name: "contacts", nullable: true, length: 50 })
  contacts: string | null;

  @Column("varchar", { name: "photo", nullable: true, length: 255 })
  photo: string | null;

  @Column("datetime", { name: "last_login", nullable: true })
  lastLogin: Date | null;

  @Column("datetime", { name: "last_activity", nullable: true })
  lastActivity: Date | null;

  @Column("varchar", { name: "civilite", length: 180 })
  civilite: string;

  @Column({select:true})
  salt: string;

  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date;

  @ManyToOne(()=> Role, (roles)=> roles.users)
  roles: Role;

  @OneToMany(() => Commande, (commande) => commande.users)
  commande: Commande[];

  @OneToMany(
    () => Approvisionnement,
    (approvisionnements) => approvisionnements.user
  )
  approvisionnements: Approvisionnement[];

  @OneToMany(()=> AddressFact, (addressfact) => addressfact.user)
  addressFact: AddressFact[];

  @OneToMany(() => Notification, (users) => users.users)
  notification: Notification[];


  @OneToMany(()=> CarteCadeau, (cartecadaeu) => cartecadaeu.users)
  carteCadeau: CarteCadeau[];

  @OneToMany(()=> Commentairs, (commentair) => commentair.user)
  commentair: CarteCadeau[];

  @OneToMany(()=> DemandeAnnulation, (demande) => demande.user)
  demandeAnnulation: DemandeAnnulation[];

  @OneToMany(()=> DemandeRetoure, (demande) => demande.user)
  demandeRetoure: DemandeRetoure[];

  @OneToOne(()=> Panier, (ligne) => ligne.users)
  panier: Panier;

  // @OneToMany(()=> Commentairs, (commentair) => commentair.user)
  // commentair: CarteCadeau[];

  @BeforeInsert()
  async hashPassword() {
  this.password = await bcrypt.hash(this.password,this.salt);
  }
 

  async validatePassword(password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword).then(result => {
      console.log("pas lalall",result);
      
      return result
    })
  }
    
  
  
}
