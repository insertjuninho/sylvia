import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class time1659914413431 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    //   await queryRunner.createTable(
    //     new Table({
    //         name:"time",
    //         columns:[
    //             {
    //                 name:
    //             }
    //         ],
    
    // foreignKeys: [
    //     {
    //         name:"Fk_jogador",
    //         columnNames:["id_jogador"],
    //         referencedTableName:["jogador"],
    //         referencedColumnName:["id_jogador"]
    //     }
    // ]
    //     })
    //   )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("time");
    }

}
