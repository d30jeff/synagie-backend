import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('DeliveryMethod', table => {
    table.increments('method_id');
    table.string('plan_id').references('plan_id').inTable('Plan').onDelete('CASCADE').index
    table.string('delivery_code').index;
    table.string('delivery_name').index;
    table.double('flat_fee').unsigned;
    table.integer('divisor').unsigned;
    table.string('hj_carrier_name');
    table.string('hj_service_level');

  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('DeliveryMethod');
}
