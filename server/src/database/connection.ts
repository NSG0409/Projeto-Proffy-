import knex from 'knex';
import path from 'path';

const db = knex({
    client: 'sqlite3',
    //criando arquivo dentro do sqlite dentro da pasta database do sqlite
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    //para avisar q o valor null tem q ser true, pq o lite nao sabe
    useNullAsDefault: true,

});

export default db;
