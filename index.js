const http = require('http');
let router = require('../server/routes/routes');
let model = require('../server/model/index');
let logToFile = require('../server/utils/logger');

//Server
const port = 80;
function serverFunc(req, res) {
    router.callRoute(req, res);
}

let server = http.createServer(serverFunc);
server.listen(port);