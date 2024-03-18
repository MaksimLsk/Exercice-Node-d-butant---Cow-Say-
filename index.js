const info = require('./informations.js');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Hello I'm ${info.name} et je suis à la ${info.school}`,
    e: "oO",
    T: "U "
}));