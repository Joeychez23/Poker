const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
//const db = require('./config/db');
const port = process.env.PORT || 3000;




app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



/*
let connection = mysql.createConnection({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'bc7ada4f2cece9',
    password: '084c2219',
    database: 'heroku_e723bcfa51ec52b',
    multipleStatements: true,
    insecureAuth : true
});
*/


/*
function handleDisconnect() {
    connection = mysql.createConnection({
        host: 'us-cdbr-east-06.cleardb.net',
        user: 'bc7ada4f2cece9',
        password: '084c2219',
        database: 'heroku_e723bcfa51ec52b',
        multipleStatements: true,
        insecureAuth : true
    });
                                                    // Recreate the connection, since
                                                    // the old one cannot be reused.
  
    connection.connect(function(err) {              // The server is either down
      if(err) {                                     // or restarting (takes a while sometimes).
        console.log('error when connecting to db:', err);
        setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
      }                                     // to avoid a hot loop, and to allow our node script to
    });                                     // process asynchronous requests in the meantime.
                                            // If you're also serving http, display a 503 error.
    connection.on('error', function(err) {
      console.log('db error', err);
      if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
        handleDisconnect();                         // lost due to either server restart, or a
      } else {                                      // connnection idle timeout (the wait_timeout
        throw err;                                  // server variable configures this)
      }
    });
}


  
handleDisconnect();

*/

/*= mysql.createConnection({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'bc7ada4f2cece9',
    password: '084c2219',
    database: 'heroku_e723bcfa51ec52b',
    multipleStatements: true
});


connection.connect(function(err) {
    if(err)throw err;
    else {
        console.log("Connection Successful");
    }
})*/



app.set('view engine', 'ejs');

console.log("START");






app.get('/', function (req, res) {
    res.sendFile(__dirname + '/poker.html');
    //res.render("Hello World");
});


app.listen(port);
console.log(`listening on port ${port}`);



/*
app.get('/api', function (req, res) { //WHERE id = "4"
    connection.query('SELECT * FROM data', (error, rows) => {
        if (error) {
            console.log('error');
        }
        if (!error) {
            console.log('Success');
            res.json(rows);

        }  
    }
})

*/