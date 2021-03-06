let express = require('express')
let bodyParser = require('body-parser')
let server = express()

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
let monsters = require('./server-assets/models/monster')

server.use(express.static(__dirname + '/public'))
server.use(monsters.routes);

server.listen(8080, function () {
    console.log("The server is running on port 8080")
})