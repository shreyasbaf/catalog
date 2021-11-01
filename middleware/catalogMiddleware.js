const Mysql = require('../connectors/mysql')

class CatalogMiddleware {
    constructor() {
        this.mysqlConnector = new Mysql();
    }
    async getCategories() {
        return this.mysqlConnector.getAll('catelog_category')
    }

    async getItems(category = null) {
        let where = '';
        if(category) {
            where = `where category = "${category}"`
        }
        return this.mysqlConnector.getAll('catalog', where)
    }
}

module.exports = CatalogMiddleware;