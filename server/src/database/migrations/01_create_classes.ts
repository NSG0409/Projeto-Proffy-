import Knex from 'knex';


//Na function up 'Realizamos os comando Database'
export async function up(knex: Knex){
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('users_id')
        .notNullable()
        .references('id')
        .inTable('users')

        //.onDelete apaga todas as aulas relacionada do professor 
        //caso o professor é removido da plataforma
        .onDelete('CASCADE')
        //.onUpdate atualiza todos os 'ids' criado caso eles forem
        //alterados na tabela 'users' 
        .onUpdate('CASCADE');


    });
}
//Na function down 'Desfazemos os comando Database'
export async function down(knex: Knex){
    return knex.schema.dropTable('classes');
}