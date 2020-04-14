
const mixController      = require('./controllers/mix'),
    staticController    = require('./controllers/static');

const endpoints = [
    { method: 'GET',  path: '/api', ...staticController.get },
    { method: 'GET', path: '/api/books', ...mixController.getAllBooks},
    { method: 'GET', path: '/api/books/{bookId}', ...mixController.getBookById},
    { method: 'GET', path: '/api/characters', ...mixController.getAllCharacters},
    { method: 'GET', path: '/api/characters/{characterId}', ...mixController.getCharacterById},
    { method: 'GET', path: '/api/houses', ...mixController.getAllHouses},
    { method: 'GET', path: '/api/houses/{houseId}', ...mixController.getHouseById},
    ];

module.exports.edpoints =endpoints;

module.exports.setRoutes = server => {
    endpoints.forEach(e => server.route(e));
    return server
};
