const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// Query Params: request.query
//test: http://localhost:3333/?name=Hello
//routes.get('/', (req, res) => { res.send(req.query); });

// Route Params: request.params
//test: http://localhost:3333/123
//routes.get('/:id', (req, res) => { res.send(req.params); });

// Body: request.body
//test: POST http://localhost:3333/ { "name": "Foo bar" }
//routes.post('/', (req, res) => { res.send(req.body); });

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;
