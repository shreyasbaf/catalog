let mysql = require('mysql-promise')();

class Mysql {
    constructor() {
        mysql.configure({
            host: '46.17.172.154',
            user: 'u386445862_narratnasuri',
            password: 'narratnasuri@Pulse@123dev',
            database: 'u386445862_birthday_wish'
          });
    }

    async getAll(table, where = '') {
        let sql = `select * from ${table}`
        if (where) {
            sql = sql + ' ' + where + ';';
        }
        let result = await mysql.query(sql);
        return (result[0].length ? result[0] : null);
    }
}

module.exports = Mysql;