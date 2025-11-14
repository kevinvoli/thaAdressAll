import { User } from 'src/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, JoinTable } from 'typeorm';
import { Permition } from './permition.entity';
@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description:string

  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date

  @OneToMany(() => User, (user) => user.roles)
  users: User[];

  @ManyToMany(() => Permition)
  @JoinTable()
  permition: Permition[]
}
