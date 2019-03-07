const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
var mysql = require('mysql');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

// app.get('/', function (req, res) {
 // res.sendFile(path.join(__dirname, 'build', 'index.html'));
//});
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'nodelogin'
});

app.post('/login',(request,response)=>{
  var username = request.body.email;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
    if(0){
      console.log(JSON.stringify(results));
				// request.session.loggedin = true;
				// request.session.username = username;
				response.send({
          sucess:true,
          token:'himansu'
        });
			} else {
        response.send({success:false,
        error:results,

        });
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});
app.listen(process.env.PORT || 8080 , ()=>{console.log('Server Running on Port 8080')})