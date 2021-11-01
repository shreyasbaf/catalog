const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');
const {getCategories, getItems } = require('./endpointHandlers/catalog')

const app = express()
const router = express.Router();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

// API's
router.get('/getCategories', getItems);

app.use('/', router);



// if (process.env.DEV === 'true' || process.env.DEV === true) {
//     const port = 8080
//     app.listen(port, () => {
//         console.log(`Server starting listning at port ${port}`)
//     });
// } else {
//     const handler = serverless(app);
//     module.exports.handler = async (event, context) => {
//         const result = await handler(event, context);
//         return result;
//     };
// }

app.listen(process.env.port || 8080);