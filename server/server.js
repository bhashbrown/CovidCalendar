const express = require('express');

const app = express();
const path = require('path');

const port = 3000;

// serves webpack bundle
app.use('/dist', express.static(path.resolve(__dirname, '../dist')));

// responds with main app
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../src/index.html'));
});

// unknown request error handler
app.use((req, res) => res.sendStatus(404));

// global error handler
app.use((err, req, res) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred'},
  };
  const errObj = { ...defaultErr, err }; // Object.assign({}, defaultErr, err);
  return res.status(errObj.status).json(errObj.message);
});

app.listen(port);
