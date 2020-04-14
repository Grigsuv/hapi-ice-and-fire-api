global.rootRequire = function (name) {
    return require(__dirname + '/' + name);
};
const {setENVConfigs} = require('./config');
setENVConfigs();
const {connect} = require('./db');
connect();

const Hapi = require('@hapi/hapi');
    Routes = require('./routes');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');

const init = async () => {

    let server = Hapi.server({
        port: process.env.PORT,
        host: 'localhost'
    });
    const swaggerOptions = {
        info: {
            title: 'Test API Documentation',
            version: Pack.version,
        },
    };

    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);
    server.route(Routes.edpoints);


    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();