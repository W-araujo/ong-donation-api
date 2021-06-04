import {MigrationInterface, QueryRunner} from "typeorm";

export class tables1622671029486 implements MigrationInterface {
    name = 'tables1622671029486'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "donation" ("id" SERIAL NOT NULL, "value" integer NOT NULL, "Created_at" TIMESTAMP NOT NULL DEFAULT now(), "Updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_25fb5a541964bc5cfc18fb13a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "type" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "Created_at" TIMESTAMP NOT NULL DEFAULT now(), "Updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_40410d6bf0bedb43f9cadae6fef" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "ong_role_enum" AS ENUM('admin', 'ong')`);
        await queryRunner.query(`CREATE TABLE "ong" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "phone" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" "ong_role_enum" NOT NULL DEFAULT 'ong', "Created_at" TIMESTAMP NOT NULL DEFAULT now(), "Updated_at" TIMESTAMP NOT NULL DEFAULT now(), "type_id" integer, CONSTRAINT "PK_4d592833215da176127375d0bbb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ong_donations_donation" ("ongId" integer NOT NULL, "donationId" integer NOT NULL, CONSTRAINT "PK_ea1963bd73c424137b959780dc1" PRIMARY KEY ("ongId", "donationId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a591e6116b8d8bb8082e877f0b" ON "ong_donations_donation" ("ongId") `);
        await queryRunner.query(`CREATE INDEX "IDX_1708428b8593e7dfd805ab60af" ON "ong_donations_donation" ("donationId") `);
        await queryRunner.query(`ALTER TABLE "ong" ADD CONSTRAINT "FK_441b034f1ea6ca77933218c8ad1" FOREIGN KEY ("type_id") REFERENCES "type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ong_donations_donation" ADD CONSTRAINT "FK_a591e6116b8d8bb8082e877f0b7" FOREIGN KEY ("ongId") REFERENCES "ong"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "ong_donations_donation" ADD CONSTRAINT "FK_1708428b8593e7dfd805ab60af9" FOREIGN KEY ("donationId") REFERENCES "donation"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ong_donations_donation" DROP CONSTRAINT "FK_1708428b8593e7dfd805ab60af9"`);
        await queryRunner.query(`ALTER TABLE "ong_donations_donation" DROP CONSTRAINT "FK_a591e6116b8d8bb8082e877f0b7"`);
        await queryRunner.query(`ALTER TABLE "ong" DROP CONSTRAINT "FK_441b034f1ea6ca77933218c8ad1"`);
        await queryRunner.query(`DROP INDEX "IDX_1708428b8593e7dfd805ab60af"`);
        await queryRunner.query(`DROP INDEX "IDX_a591e6116b8d8bb8082e877f0b"`);
        await queryRunner.query(`DROP TABLE "ong_donations_donation"`);
        await queryRunner.query(`DROP TABLE "ong"`);
        await queryRunner.query(`DROP TYPE "ong_role_enum"`);
        await queryRunner.query(`DROP TABLE "type"`);
        await queryRunner.query(`DROP TABLE "donation"`);
    }

}
