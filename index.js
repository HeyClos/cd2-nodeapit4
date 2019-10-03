const express = require('express'); // importing a CommonJS modu

const server = express();

server.use(express.json());

const shouts = [];

server.get('/',(req, res) => {
    res.status(200).json({ hello: 'node 22'});
});

server.get('/shouts',(req, res) => {
    res.status(200).json(shouts);
});

server.post('/shouts',(req, res) => {
    shouts.push(req.body);
    res.status(201).json(shouts);
});

// we'll read the port from the server environment if it is there
// heroku will have the PORT environment variable set
const port = process.env.PORT || 5000;

// we can now use that port, if set up by heroku or read from .env or 5000 as a default if not set
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});