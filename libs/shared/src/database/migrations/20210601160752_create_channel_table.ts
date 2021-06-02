import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Channel', table => {
    table.increments('channel_id');
    table.string('name');
    table
      .string('user_id')
      .references('user_id')
      .inTable('User').onDelete('CASCADE').index;
    table.string('type').defaultTo('normal');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('Channel');
}
