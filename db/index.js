const { Pool } = require("pg");
const secrets = require("./secrets");
const pool = new Pool(secrets);

//TODO: testing another package
const knex = require("knex")({
  client: "pg",
  connection: {
    host: secrets.host,
    port: secrets.port,
    user: secrets.user,
    password: secrets.password,
    database: secrets.database,
  },
});

module.exports = { pool, knex };
