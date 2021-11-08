'use strict';
const assembler = require('./assembler');

exports.list_capeowners = function(req, res) {
    res.setHeader('Content-type', 'text/plain');
    res.charset = 'UTF-8';
    res.write(assembler.getCapeOwners());
    res.end();
};

exports.list_capes = function (req, res){
    res.setHeader('Content-type', 'text/plain');
    res.charset = 'UTF-8';
    res.write(assembler.getCapes());
    res.end();
}
