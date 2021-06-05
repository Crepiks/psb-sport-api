import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('event_images', (table) => {
    table.increments('id');
    table.integer('eventId').unsigned().notNullable();
    table.foreign('eventId').references('events.id').onDelete('CASCADE');
    table.string('imagePath', 255).notNullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('event_images');
}
