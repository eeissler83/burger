const mysql = require ('mysql');

const connection = mysql.createConnection({
        host: 'localhost',
        port: 8080,
        user: 'root',
        password: '',
        database: 'burgers_db'
    });
connection.connect(function (err) {
    if (err) throw err;
    console.log ('error connecting!' + err.stack);
    return;
})
console.log('connection as id ' + connection.threadId)
