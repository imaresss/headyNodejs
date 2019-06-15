module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    // Create a new Note
    app.post('/notes', notes.create);


    app.post('/categories', notes.createCategry);
    app.post('/product', notes.product);
    // Retrieve all Notes
    app.get('/notes', notes.findAll);

    app.post('/allProducts', notes.findAllProducts);
    // Retrieve a single Note with noteId
    app.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/notes/:noteId', notes.delete);
}
