'use strict';
const assembler = require('./assembler');

exports.list_capeowners = function(req, res) {
    res.send(assembler.getCapeOwners());
    //res.send("Lerbiq custom1\nSep custom2\ncodingPotato custom3")
};

exports.list_capes = function (req, res){
    res.send(assembler.getCapes());
}
