'use strict';

const async     = require('async');
const fs        = require('fs');
const path      = require('path');
const routeDir  = path.join(__dirname, '../../app/endpoints/');
const routes    = fs.readdirSync(routeDir);

module.exports.init = server => {
    return new Promise((resolve, reject) => {
        async.each(routes, (route, done) => {
            server.register({
                register : require(path.join(routeDir, route))
            }, done);
        }, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve();
        });
    });
};