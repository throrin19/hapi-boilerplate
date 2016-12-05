'use strict';

module.exports.root = (request, response) => {
    response(null,  {
        result : 'vous êtes connectés'
    });
};