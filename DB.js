var mysql      = require('mysql2');


var dbconnection = mysql.createConnection({
  host     : 'localhost',
  user     : 'evangadi_admin',
  password : '123456',
  database: "evangadi_db",
  connectionLimit: 10
});
 
dbconnection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.message);
    return;
  }
 
  console.log('connected as id ' + dbconnection.threadId);
});