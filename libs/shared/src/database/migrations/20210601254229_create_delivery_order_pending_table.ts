import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('DeliveryOrderPending', table => {
    table.string('id').unique;
    table.increments('order_counter')
    table.string('user_id').references('user_id').inTable('User').onDelete('CASCADE').index;
    table.integer('channel_id').references('channel_id').inTable('Channel').onDelete('CASCADE').unsigned().index;
    table.integer('method_id').references('method_id').inTable('DeliveryMethod').onDelete('CASCADE').unsigned().index;
    table.string('channel_order_id');
    table.string('string');
    table.timestamp('created_datetime').defaultTo(knex.fn.now()).index;
    table.timestamp('delivery_datetime').defaultTo(knex.fn.now()).index;
    table.string('delivery_period');
    table.timestamp('completed_datetime').index;
    table.string('order_num');
    table.string('recipient_name');
    table.string('recipient_email');
    table.string('address');
    table.string('contact_no');
    table.string('postal_code');
    table.string('payment_mode');
    table.double('discount_value');
    table.double('coupon_value');
    table.double('shipping_cost');
    table.double('handling_cost');
    table.double('gst');
    table.double('sales_total');
    table.string('special_request');
    table.double('exchange_rate').defaultTo(1.0000);
    table.string('currency').defaultTo('RM');
    table.string('tax_id');
    table.string('address_type');
    table.string('state');
    table.string('city');
    table.string('country_code').defaultTo('MY');
    table.timestamp('inserted_datetime').defaultTo(knex.fn.now());
    table.string('district');
    table.string('wms_address_id');
    table.string('wms_division_id');
    table.string('wms_area_id');
    table.string('wms_status');
    table.timestamp('wms_push_datetime');
    table.integer('wms_push_version');
    table.integer('wms_version').defaultTo(1);
    table.integer('gwp_version').defaultTo(0);
    table.double('voucher_seller');
    table.double('voucher_platform');
    table.string('voucher_code');
    table.string('shipping_code');
    table.double('total_declared_value');
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('DeliveryOrderPending');
}
