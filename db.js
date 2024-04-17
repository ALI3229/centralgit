const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'your-rds-endpoint',
  user: 'your-rds-username',
  password: 'your-rds-password',
  database: 'your-database-name'
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to the database');
});

module.exports = {
  getData: async () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM your_table', (err, results) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(results);
      });
    });
  }
};
