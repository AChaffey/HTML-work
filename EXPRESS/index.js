const express = require('express');
const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

const server = app.listen(port, () => {
    console.log(`server up on ${server.address().address}:${port}`);
});

const express = require('express');
const morgan = require('morgan');

const port = 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.static('public'));
app.use(express.static('public'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello world');

});

app.get('/goodbye', (req, res) => {
    res.send('Goodbye');
});

app.get('/good', (req, res) => {
    res.send('Hope youre good?');
});

const server = app.listen(port, () => {
    console.log(`server up on ${server.address().address}:${port}`);
});

// Get
app.get('/', (req, res) => {
    res.send('GET');
});
// Post
app.post('/', (req, res) => {
    res.status(201).send('Post');
});
// put
app.put('/', (req, res) => {
    res.send('Put');
});
// patch
app.patch('/', (req, res) => {
    res.send('Patch');
});

// delete
app.delete('/', (req, res) => {
    res.send('delete');
});


const server = app.listen(port, () => {
    console.log(`server up on ${server.address().address}:${port}`);
});

// for 201 aceptance code
app.post('/', (req, res) => 
    res.status(201).send('Post')
    );

app.get('/user/:id', (req, res) => {
    const id= req.params.id;
    console.log(`READ BY ID: ${id}`);
    res.send(`READ USER: ${id}`);
});

app.get('/user', (req, res) => {
    const page = req.query.pageSize;
    const pageSize = req.query.pageSize;
    const output = `Return page ${page} consisting of ${pageSize} users`;
    console.log(output);
    res.send(output);
});


const users = [{"id": 1, "name": "fred123"}, {"id": 2, "name": "fred123"}];

app.get('/user', (req, res) => {
    res.contentType('application/json')
    .status(200)
    .send(JSON.stringify(users));
});

app.use(express.json());

const server = app.listen(port,() => {
    console.log(`Server up on ${server.address().address}:${port}`);
});

