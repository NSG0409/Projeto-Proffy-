import Knex from 'knex';


//Na function up 'Realizamos os comando Database'
export async function up(knex: Knex){
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();
        

        table.integer('users_id')
        .notNullable()
        .references('id')
        .inTable('users')

        .onDelete('CASCADE')
  
        .onUpdate('CASCADE');

        //quando que foi criado essa conexao
        table.timestamp('created_at')
        .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
        .notNullable();

    });
}
//Na function down 'Desfazemos os comando Database'
export async function down(knex: Knex){
    return knex.schema.dropTable('connections');
}