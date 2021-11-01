const CatalogMiddleware = require('../middleware/catalogMiddleware')
const catalogMiddleware = new CatalogMiddleware();

const getCategories = async (req, res) => {
    try {
        let result = await catalogMiddleware.getCategories();
        res.status(200).json(result);
    } catch(error) {
        console.log(error)
        res.status(500).json({message: 'Internal error occured'});
    }
}

const getItems = async (req, res) => {
    let category = null;
    if (req.query && req.query.category) {
        category = req.query.category
    }
    try {
    let result = await catalogMiddleware.getItems(category)
    res.status(200).json(result);
    } catch(error) {
        console.log(error)
        res.status(500).json({message: 'Internal error occured'});
    }
}

module.exports = { getCategories, getItems };