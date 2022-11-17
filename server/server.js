const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

//bring in controller to use on server

const controller = require('./controller.js');

//parses JSON from incoming request
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//could have defined const for different router
//then app.use("new endpoint", newrouter)
//then it would be newrouter.post(same endpoint, different middleware)
//then corresponds to different fetch endpoint in frontend

//set up routes to serve html (eventually react)
app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
});
//added to see if functionality continues to work?
app.get('/index.html', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
});

app.get('/styles.css', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../client/styles.css'))
});

app.get('/index.js', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../client/index.js'))
});

//set up post route for when button is clicked
app.post('/', controller.getRandomPhrase, (req, res) => {
    return res.status(200).json(res.locals.phrase)
})

//redirect everyone back to index.html without changing browser
// app.get('/*', (req, res) => {
//     console.log('inside the app.get at wildcard')
//     return res.status(200).redirect(path.join(__dirname, '../client/index.html'))
// })

//catchall bad requests
app.use('*', (req, res) => {
    return res.status(404).sendFile(path.join(__dirname, '../client/404.html'))
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