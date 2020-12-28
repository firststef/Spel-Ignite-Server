let Router = require('../utils/router');
let apiController = require('../controller/apiController');
let resourceController = require('../controller/resourceController');

let router = new Router();
router.get('/api/func1', apiController.func1.bind(apiController));

module.exports = router;
