import Knex from 'knex';


//Na function up 'Realizamos os comando Database'
export async function up(knex: Knex){
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();
        //week_day campo de 0-6 referindo dia da semana
        table.integer('week_day').notNullable();
        //from significa 'de que horas'  que são os horarios
        table.integer('from').notNullable();
        //to significa 'a que horas' que são os horarios
        table.integer('to').notNullable();

        table.integer('class_id')
        .notNullable()
        .references('id')
        .inTable('classes')


        .onDelete('CASCADE')
 
        .onUpdate('CASCADE');


    });
}
//Na function down 'Desfazemos os comando Database'
export async function down(knex: Knex){
    return knex.schema.dropTable('class_schedule');
}