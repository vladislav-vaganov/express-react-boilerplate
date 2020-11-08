'use strict';

const express = require('express');
var bodyParser = require('body-parser');

const port = 7337;
const app = express();

app.use(bodyParser.json());

app.get('/list', (req, res) => {
  res.send([1, 2, 3]);
});

app.post('/data', (req, res) => {
  res.send(req.body);
});

app.listen(port, () => console.log(`running on port ${port}`));
