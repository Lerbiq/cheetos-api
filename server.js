var express = require('express'),
    app = express(),
    port = process.env.PORT || 3080;

var routes = require('./js/routes.js'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Cheetos Cape API server started on: ' + port);