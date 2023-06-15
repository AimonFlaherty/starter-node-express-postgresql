//const env = process.env.NODE_ENV || "development";
const config = require("../../knexfile")["development"];
const knex = require("knex")(config);

module.exports = knex;