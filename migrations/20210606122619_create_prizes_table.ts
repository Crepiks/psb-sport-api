import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('prizes', (table) => {
    table.increments('id');
    table.string('title', 255).notNullable();
    table.string('description', 255).notNullable();
    table.integer('cost').notNullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('prizes');
}
