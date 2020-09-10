const db = require('./calModel.js');

const calController = {};

calController.getEntries = (req, res, next) => {
  const entries = 'SELECT * FROM entries';
  db.query(entries, (err, result, fields) => {
    if (err) throw err;
    res.locals.entries = result.rows;
    return next();
  });
};

calController.postEntry = (req, res, next) => {
  const {
    date, time, location, people,
  } = req.body;
  const values = [date.toString(), time.toString(), location, people];
  const newEntry = `
    INSERT INTO entries
    VALUES (1, ${date.toString()}, ${time.toString()}, ${location}, ${people});
  `;
  db.query(newEntry);
  // *** keep working on this
};

calController.deleteEntry = (req, res, next) => {
  // something
};

calController.newUser = (req, res, next) => {
  // something
};

module.export = calController;
