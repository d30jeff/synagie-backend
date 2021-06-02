import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Plan', table => {
    table.string('plan_id').primary().index;
    table.string('plan_name');
    table.integer('bin_amount').unsigned;
    table.integer('add_amount').unsigned;
    table.double('price').unsigned;
    table.double('per_restock_item').unsigned;
    table.double('per_restock_item_discount').unsigned;
    table.integer('restock_discount_threshold').unsigned;
    table.double('per_delivery').unsigned;
    table.integer('delivery_item_threshold').unsigned;
    table.double('per_delivery_item').unsigned;
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('Plan');
}
