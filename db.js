const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "minwon",
    host: "localhost",
    port: 5432,
    database: "SabandoMinguilan"
});

module.exports = pool;