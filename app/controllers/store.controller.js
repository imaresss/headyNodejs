const Category = require('../models/category.model.js');

const Product = require('../models/product.model.js');
exports.createCategry = (req, res) => {

	for(var i =0 ; i< req.body.parentCategories ; i++)
	{

		Category.updateOne({"id": req.body.parentCategories[i] , $push: {child_categories :  req.body.id }  }, function (err, docs) {
		})
	}

    const category = new Category({
        id: req.body.id , 
        child_categories: req.body.childCategories,
	creationDate : Math.floor(Date.now() / 1000)
    });

    category.save()
    .then(data => {
        res.json({"success":"true"});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while Adding category."
        });
    });
};



exports.product = (req, res) => {
 
    const product = new Product({
        name: req.body.name , 
        price: req.body.price,
	categories : req.body.categories,
	creationDate : Math.floor(Date.now() / 1000),
	modificationDate : Math.floor(Date.now() / 1000)
    });

    product.save()
    .then(data => {
        res.json({"success":"true"});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while Adding A product."
        });
    });
};


exports.findAllProducts = (req, res) => {
    Product.find({categories : {$in : req.body.category}})
    .then(products => {
        res.send(products);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving product by a category."
        });
    });
};


exports.getAllCategory = (req, res) => {
    Category.find({})
    .then(category => {
        res.send(category);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving all categories."
        });
    });
};

exports.updateProduct = (req, res) => {


    Product.findByIdAndUpdate(req.body.productId, {
        name:req.body.name,
        price:  req.body.price,
	categories : req.body.categories,
	modificationDate : Math.floor(Date.now() / 1000)
    }, {new: true})
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with id " + req.body.productId
            });
        }

        res.json({"success":"true"});
    }).catch(err => {
        return res.status(500).send({
            message: "Error updating product with id " + req.body.productId
        });
    });
};

