const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

//bring in controller to use on server

const controller = require('./dbofcomps.js');

//parses JSON from incoming request
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


//set up routes to serve html (eventually react)
app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, './client/index.html'))
});

app.get('/styles.css', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, './client/styles.css'))
});

//set up post route for when button is clicked
app.post('/', controller.getPhrase, (req, res) => {
    return res.status(200).json(res.locals.phrase)
})

//catchall bad requests
app.use('*', (req, res) => {
    return res.status(404).sendFile(path.join(__dirname, './client/404.html'))
});

//Global Error Handler
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: { err: 'An error occurred'}
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});