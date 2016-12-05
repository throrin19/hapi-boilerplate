'use strict';

const handler = require('../handlers/default');

exports.register = (server, options, next) => {
    server.route([
        {
            method : 'GET',
            path   : '/',
            config : {
                description : 'Base route',
                notes       : 'Route par défaut du projet',
                tags        : [ 'api' ],
                handler     : handler.root
            }
        }
    ]);
    next();
};

exports.register.attributes = {
    name : 'default-routes'
};