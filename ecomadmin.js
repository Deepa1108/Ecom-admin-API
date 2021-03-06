
// Import product model
Product = require('./ecommodel');
// Handle index actions
exports.index = function (req, res) {
    Product.get(function (err, products) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            
            message: "Products retrieved successfully",
            data: products
        });
    });
};
// Handle add product
exports.new = function (req, res) {
    var product = new Product();
    product.name = req.body.name ? req.body.name : product.name;
    product.id = req.body.id;
    product.quantity = req.body.quantity;
   
// save product and check for errors
    product.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New Product added',
            data: product
        });
    });
};
// Handle view product info
exports.view = function (req, res) {
    Product.findById(req.params.product_id, function (err, product) {
        if (err)
            res.send(err);
        res.json({
            message: 'Product details loading..',
            data: product
        });
    });
};
// Handle update product info
exports.update = function (req, res) {
Product.findById(req.params.product_id, function (err, product) {
        if (err)
            res.send(err);
product.name = req.body.name ? req.body.name : product.name;
        product.id = req.body.id;
        product.quantity = req.body.quantity;
        
// save the product 
        product.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Product Info updated',
                data: product
            });
        });
    });
};
// Handle delete product
exports.delete = function (req, res) {
    Product.remove({
        _id: req.params.product_id
    }, function (err, product) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Product deleted'
        });
    });
};