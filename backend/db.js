
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'car_dealership'
});

const promisePool = pool.promise();

module.exports = promisePool;
