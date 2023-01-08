const nodegeocoder=require("node-geocoder");
const opitions={
    provider:"mapquest",
    httpAdapter:"https",
    apiKey:"LINdw75Wo2y7PetqNhSLRZVcEfNA5PEF",
    formatter:null
}

const geocoder=nodegeocoder(opitions)

module.exports=geocoder;