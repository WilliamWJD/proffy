import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('logins', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('password_hash').notNullable();
    table.string('passwordRestToken');
    table.date('passwordResetExpires');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('logins');
}
