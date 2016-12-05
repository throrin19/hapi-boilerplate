'use strict';

const envConfig     = require('../environments/all');

module.exports.init = server => {
    return new Promise((resolve) => {
        server.app = {
            envs : envConfig,
            env  : process.env.NODE_ENV || 'development'
        };

        server.connection(envConfig.connections.api);
        resolve();
    });
};