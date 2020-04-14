process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const baseConfig = {
    PORT: 3005,
    JWT_SECRET_EXPIRE_TIME: '3d',
    JWT_SECRET_KEY: 'P8maFxEgiAAYlnbwDNbHJtuQVImbs2FrnhNl',
    DB_URL: 'mongodb://localhost/haapiCRUD'
};

module.exports.setENVConfigs = () => process.env = Object.assign(process.env, baseConfig);