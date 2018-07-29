require("dotenv").config();
const algorithmia = require("algorithmia");
const client = algorithmia(process.env.ALGORITHMIA_API_KEY);

module.exports = client;
