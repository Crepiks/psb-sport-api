import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('prize_images', (table) => {
    table.increments('id');
    table.integer('prizeId').unsigned().notNullable();
    table.foreign('prizeId').references('prizes.id').onDelete('CASCADE');
    table.string('imagePath', 255).notNullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('prize_images');
}
