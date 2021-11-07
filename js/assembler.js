const capeOwners = require("../json/capeowners.json");
const capes = require("../json/capes.json");

module.exports = {getCapeOwners, getCapes}

function getCapeOwners(){
    let res = "";
    for (let key in capeOwners) {
        if(capeOwners.hasOwnProperty(key)){
            res = res + key + " " + capeOwners[key] + "<br/>";
        }
    }
    return res;
}

function getCapes(){
    let res = "";
    for(let key in capes){
        if(capes.hasOwnProperty(key)){
            res = res + key + " " + capes[key] + "<br/>";
        }
    }
    return res;
}

getCapeOwners();