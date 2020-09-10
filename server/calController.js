const db = require('./calModel.js');

const calController = {};

calController.getEntries = (req, res, next) => {
  const entries = `
    SELECT * FROM entries 
    WHERE userId = 1;
  `;
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
    VALUES (1, $1, $2, $3, $4);
  `;
  db.query(newEntry, values, (err, result) => {
    if (err) throw err;
    res.locals.newEntry = result.rows;
    return next();
  });
};

calController.deleteEntry = (req, res, next) => {
  const {
    date, time, location, people,
  } = req.body;
  const values = [date.toString(), time.toString(), location, people];
  const newEntry = `
    DELETE FROM entries
    WHERE 
  `;
};

calController.newUser = (req, res, next) => {
  // something
};

module.exports = calController;
