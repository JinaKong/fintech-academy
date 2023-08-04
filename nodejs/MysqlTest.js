// mysql 연동되었는지 확인

// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',         // 원래는 root로 접근하면 안 됨(관리자 권한이므로) 
  password: '0776',
  database: 'fintech'
});

// simple query
connection.query(
  'SELECT * FROM user',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);
