import { PrimaryGeneratedColumn, Entity, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class Reduction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string

  @Column({type:'int'})
  pourcentage_rd: number

  @Column()
  actif: boolean;

  @Column({type:'datetime'})
  periode_rd: Date

  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt: Date;
}