const http = require('http');
let router = require('./routes/routes');
let model = require('./model/index');
let logToFile = require('./utils/logger');

//Server
const port = 80;
function serverFunc(req, res) {
    router.callRoute(req, res);
}

let server = http.createServer(serverFunc);
server.listen(port);