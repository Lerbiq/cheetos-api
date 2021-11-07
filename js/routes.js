'use strict';
module.exports = function(app) {
    var cheetosApi = require('./controller');


    // todoList Routes
    app.route('/capeowners')
        .get(cheetosApi.list_capeowners);


    app.route('/capes')
        .get(cheetosApi.list_capes);
};
