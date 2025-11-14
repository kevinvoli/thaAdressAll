import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Token{
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({unique:true})  
  accessToken: string;

  @Column()
  refreshToken:string;

  @Column({unique:true})
  userId:number;

  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date
}