'use strict';

const _             = require('lodash');
const env           = require('./' + (process.env.NODE_ENV || 'development'));
const packageJson   = require('../../package.json');

const all           = {
    log : {
        showRouteAtStart : true
    },
    connections : {
        api : {
            host    : '0.0.0.0',
            port    : process.env.PORT || 8080,
            labels  : [ 'api' ]
        }
    }
};

module.exports = _.merge(all, env);
