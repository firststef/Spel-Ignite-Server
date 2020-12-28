let model = require('../model/index');
let logger = require('../utils/logger');
let url = require('url');

class ApiController {
    constructor() {}

    reject(res, e){
        res.writeHead(404);
        logger(e);
        res.write('Not found');
        res.end();
    }

    resolve(res, content, type){
        res.statusCode = 200;
        res.setHeader('Content-Type', type);
        res.write(JSON.stringify(content));
        res.end();
    }

    /* Api callbacks */
    func1(){
    }
}

let apiController = new ApiController();



module.exports = apiController;