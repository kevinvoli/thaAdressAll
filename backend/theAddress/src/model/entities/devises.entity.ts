import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Devises {

  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "currency_code", nullable: true, length: 10 })
  currencyCode: string | null;

  @Column("varchar", { name: "currency_name", nullable: true, length: 255 })
  currencyName: string | null;

  @Column("varchar", { name: "left_symbol", nullable: true, length: 12 })
  leftSymbol: string | null;

  @Column("varchar", { name: "right_symbol", nullable: true, length: 12 })
  rightSymbol: string | null;

  @Column("varchar", { name: "decimal_symbol", nullable: true, length: 1 })
  decimalSymbol: string | null;

  @Column("varchar", { name: "decimal_place", nullable: true, length: 1 })
  decimalPlace: string | null;

  @Column("varchar", { name: "thousands_separator", nullable: true, length: 1 })
  thousandsSeparator: string | null;

  @Column("double", { name: "exchanged_value", nullable: true })
  exchangedValue: number | null;

  @Column({ name: "published", nullable: true })
  published: boolean | null;

  @Column("datetime", { name: "modified_date", nullable: true })
  modifiedDate: Date | null;

  @Column("int", { name: "codeiso", nullable: true })
  codeiso: number | null;

  
  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date
  
}