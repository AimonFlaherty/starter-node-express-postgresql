// Update with your config settings.
const path = require("path");
require("dotenv").config();
//const{DATABASE_URL} = process.env;

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "postgresql",
    connection: "postgres://zzmwzgsr:pknHs1N1hR0pLfISJTQcc3AWy0IugPXl@ruby.db.elephantsql.com/zzmwzgsr",
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};

const config = {
  client: "postgresql",
  connection:
    "postgres://myfakedatabase:8t6FiWqSDF8GsR--7mrun245I9TofnWd@fakepostgres.db.elephantsql.com:5432/myfakedatabase",
};

// Initialize a Knex instance by passing `config` as an argument to the Knex module
const knex = require("knex")(config);
