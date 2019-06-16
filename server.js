const express = require('express');
const bodyParser = require('body-parser');

var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');



const app = express();


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json())

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.send("SERVER STARTED");
});

require('./app/routes/store.routes.js')(app);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
