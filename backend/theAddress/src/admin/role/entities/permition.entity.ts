import { Role } from "src/admin/role/entities/role.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Permition {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type:"boolean", default:false})
  created: boolean ;

  @Column({type:"boolean", default:false})
  deleted:boolean;

  @Column({type:"boolean", default:false})
  updated:boolean;

  @Column({type:"boolean", default:false})
  read:boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date
  
}
