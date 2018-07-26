const API_KEY = "";

const algorithmia = require("algorithmia");
const client = algorithmia(API_KEY);

module.exports = client;
