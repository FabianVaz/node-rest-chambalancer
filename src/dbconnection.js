const fs = require('fs');
const knex = require('knex');

async function connectMysql(){
    const dbPassword = await fs.promises.readFile('/run/secrets/db_password');
    const db = knex({
        client: 'mysql2',
        connection: {
            host: 'mysql',
            user: 'user_chambalancer',
            password: dbPassword,
            database: 'chambalancer'
        }
    });
    return db;
}

module.exports = {
    connectMysql
};
