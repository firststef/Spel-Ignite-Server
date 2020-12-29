let model = require('../model/index');
let logger = require('../utils/logger');
let url = require('url');
let spells = require('spells');

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

    compile(req, res){
        const parsedUrl = url.parse(req.url, true);
        this.resolve(res, parsedUrl.query.code? spells.compile(parsedUrl.query.code) : 'not found', 'text/json');
    }
}

let apiController = new ApiController();



module.exports = apiController;