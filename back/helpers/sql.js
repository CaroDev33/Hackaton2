import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'sql7.freesqldatabase.com',
  user: 'sql7244883',
  password: 'f2aLuwHwkl',
  database: 'sql7244883'
});

connection.connect((err) => {
  if (!err) {
    console.log('sqlDB connected');
  } else {
    console.log('Error connecting database');
  }
});

module.exports = connection;
