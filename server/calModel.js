const { Pool } = require('pg');

const PG_URI = 'postgres://qvqvagbr:rwFHaq6fLgsEs3-7_oX0YkidszIpuqMM@otto.db.elephantsql.com:5432/qvqvagbr';

const pool = new Pool({ connectionString: PG_URI });

module.exports = {
  query: (text, params, callback) => {
    console.log('*SQL Query*', text);
    return pool.query(text, params, callback);
  },
};
