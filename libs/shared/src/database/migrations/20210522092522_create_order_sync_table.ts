import * as Knex from "knex";
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('OrderSync', table => {
    table.increments('id');
    table.string('user_id');
    table.string('order_id');
    table.string('channel');
    table.string('channel_order_id').index;
    table.string('current_status');
    table.string('action_params');
    table.dateTime('created_at');
    table.dateTime('synced_at').index;
    table.string('sync_error');

    table.index(['order_id', 'current_status'], 'idx_composite');
  });


}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('OrderSync');
}
