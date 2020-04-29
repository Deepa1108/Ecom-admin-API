/// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome ',
    });
});
// Import ecoadmin
var ecomadmin = require('./ecomadmin');
// product routes
router.route('/products')
    .get(ecomadmin.index)
    .post(ecomadmin.new);
router.route('/products/:product_id')
    .get(ecomadmin.view)
    .patch(ecomadmin.update)
    .put(ecomadmin.update)
    .delete(ecomadmin.delete);
// Export API routes
module.exports = router;