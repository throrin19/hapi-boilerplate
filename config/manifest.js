'use strict';

const Hapi          = require('hapi');
const envConfig     = require('./environments/all');
const plugins       = require('./manifest/plugins');
const routes        = require('./manifest/routes');

module.exports.init = () => {
    const server = new Hapi.Server();

    return new Promise((resolve, reject) => {
        // configuration de base du serveur

        server.app = {
            envs : envConfig,
            env  : process.env.NODE_ENV || 'development'
        };

        server.connection(envConfig.connections.api);
        resolve();
    }).then(() => {
        // configuration des plugins
        return plugins.init(server);
    }).then(() => {
        // configuration des routes
        return routes.init(server);
    }).then(() => {
        return server;
    });
};