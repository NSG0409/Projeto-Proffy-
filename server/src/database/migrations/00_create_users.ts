import Knex from 'knex';


//Na function up 'Realizamos os comando Database'
export async function up(knex: Knex){
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}
//Na function down 'Desfazemos os comando Database'
export async function down(knex: Knex){
    return knex.schema.dropTable('users');
}