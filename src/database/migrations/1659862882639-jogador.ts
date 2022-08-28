import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class jogador1659862882639 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"jogador",
                columns: [
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"nome",
                        type:"varchar",
                        isUnique: true
                    },
                    {
                        name:"posicao",
                        type:"varchar"
                    },
                    {
                        name:"altura",
                        type:"varchar"
                    },
                    {
                        name:"peso",
                        type:"varchar"
                    },
                    {
                        name:"cpf",
                        type: "varchar"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("jogador");
    }

}
