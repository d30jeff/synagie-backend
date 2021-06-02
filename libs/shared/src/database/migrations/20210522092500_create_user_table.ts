import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('User', table => {
    table.string('user_id').primary().unique().index;
    table.string('user_role')
    table.string('email').unique()
    table.string('hashpw')
    table.string('first_name')
    table.string('last_name')
    table.timestamp('created_datetime').defaultTo(knex.fn.now())
    table.string('company')
    table.string('billing_address')
    table.string('postal_code')
    table.string('phone_number')
    table.string('stripe_id')
    table.boolean('is_banned').defaultTo(false)
    table.boolean('stage').defaultTo(true)
    table.string('gst_reg')
    table.string('url')
    table.string('fax_number')
    table.string('logo')
    table.integer('is_mt').defaultTo(0)
    table.string('brand')
    table.string('vendor')
    table.boolean('onboarding').defaultTo(1)
    table.integer('big_data_status').defaultTo(0)
    table.timestamp('password_updated_at').defaultTo(knex.fn.now())
    table.string('temppw')
    table.string('wms_code')
    table.string('wms_option')
    table.string('twofactor')
    table.string('twofactor_hash')
    table.timestamp('twofactor_datetime')
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('User');
}
