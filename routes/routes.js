let Router = require('../utils/router');
let apiController = require('../controller/apiController');
let resourceController = require('../controller/resourceController');

let router = new Router();
router.get('/api/compile', apiController.compile.bind(apiController));

module.exports = router;
