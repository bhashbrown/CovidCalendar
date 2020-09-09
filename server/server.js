const express = require('express');

const app = express();
const path = require('path');

const port = 3000;

app.use('/dist', express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../src/index.html'));
});

app.listen(port);
