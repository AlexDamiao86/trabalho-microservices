import { MigrationInterface, QueryRunner, Table } from "typeorm"

export default class CreateCriptomoedas1670803112581 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'criptomoedas',
          columns: [
            {
              name: 'id',
              type: 'varchar',
              isPrimary: true,
              generationStrategy: 'uuid',
            },
            {
              name: 'codigo',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'nome',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'descricao',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'cotacao_compra',
              type: 'decimal',
              precision: 12,
              scale: 4,
              isNullable: false,
            },
            {
              name: 'cotacao_venda',
              type: 'decimal',
              precision: 12,
              scale: 4,
              isNullable: false,
            },
            {
              name: 'variacao',
              type: 'decimal',
              precision: 6,
              scale: 2,
              isNullable: true,
            },
            {
              name: 'timestamp_criacao',
              type: 'timestamp',
              default: 'CURRENT_TIMESTAMP',
            },
            {
              name: 'timestamp_atualizacao',
              type: 'timestamp',
              default: 'CURRENT_TIMESTAMP'
            },
          ],
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('criptomoedas');
    }

}
