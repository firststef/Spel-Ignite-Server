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
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.write(JSON.stringify(content));
        res.end();
    }

    compile(req, res){
        const parsedUrl = url.parse(req.url, true);
        let code = parsedUrl.query.code;
        let result = 'not found';
        if (code){
            result = spells.compile(Buffer.from(code, "base64").toString('utf-8'));
        }
        this.resolve(res, result, 'text/json');
    }
}

let apiController = new ApiController();



module.exports = apiController;