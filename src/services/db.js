const mysql = require('mysql2/promise');
const config_db = require("../../config_db")


async function query(sql, params) {
  const connection = await mysql.createConnection(config_db.db);
  const [results, ] = await connection.execute(sql, params);

  return results;
}

module.exports = {
  query
}