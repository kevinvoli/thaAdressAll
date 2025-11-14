import { Column, PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';


@Entity()
export class Log {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("varchar", { name: "content", length: 500 })
  content: string;

  @Column("varchar", { name: "action", length: 255 })
  action: string;

  @Column("varchar", { name: "color", length: 20 })
  color: string;

  @Column("varchar", {
    name: "icon",
    nullable: true,
    length: 255,
    default: () => "'NULL'",
  })
  icon: string | null;

  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date
}
