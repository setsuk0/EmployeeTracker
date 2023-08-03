const mysql = require("mysql2");

// Configure the database connection
const pool = mysql.createPool({
  host: "localhost",
  user: "setsuk0",
  password: "spaghetti",
  database: "employee_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Function to execute SQL queries and return results as a Promise
module.exports = function executeQuery(sql, values = []) {
  return new Promise(function (resolve, reject) {
    pool.query(sql, values, function (error, results) {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

