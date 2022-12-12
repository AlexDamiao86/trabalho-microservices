import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Timestamp, UpdateDateColumn } from "typeorm"

export class ColumnNumericTransformer {
  to(data: number): number {
    return data;
  }
  from(data: string): number {
    return parseFloat(data);
  }
}

@Entity('criptomoedas')
export class Criptomoeda {
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column()
    codigo: string;
    @Column()
    nome: string;
    @Column()
    descricao: string;
    @Column({type: "decimal", precision: 12, scale: 4, transformer: new ColumnNumericTransformer()})
    cotacao_compra: number;
    @Column({type: "decimal", precision: 12, scale: 4, transformer: new ColumnNumericTransformer()})
    cotacao_venda: number;
    @Column({type: "decimal", precision: 6, scale: 2, transformer: new ColumnNumericTransformer()})
    variacao: number;
    @CreateDateColumn()
    timestamp_criacao: Timestamp;
    @UpdateDateColumn()
    timestamp_atualizacao: Timestamp;
}








