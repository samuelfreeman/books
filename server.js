// importing  express
const express = require('express');
const app = express();

// importing body parser
const bodyParser = require('body-parser');

// importing book router
const book = require('./routes/book');

// assigning a port number 
const port = 3030;


app.use(bodyParser.json());// create middleware to use body parser


app.use('/api', book);// create middleware to use book router


// listen to port number
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//  https method are use to perform  crud  operations
// crud - stands for create, read ,update, delete
//  post - create
//  get - read
//  update - update
//  delete - delete

// MVC Model ,view ,controllers
//  the mvc architecture allow developers to split their code to prevent error prone codes