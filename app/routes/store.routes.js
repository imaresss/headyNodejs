module.exports = (app) => {
    const notes = require('../controllers/store.controller.js');

    app.post('/addCategory', notes.createCategry);
    app.get('/getCategory', notes.getAllCategory);
    app.post('/addProduct', notes.product);
    app.post('/updateProduct', notes.updateProduct);
    app.post('/allProducts', notes.findAllProducts);

}
