const { Pool } = require('pg');

const PG_URI = // 'put ElephantSQL URL string here';

const pool = new Pool({ connectionString: PG_URI });

module.exports = {
  query: (text, params, callback) => {
    console.log('*SQL Query*', text);
    return pool.query(text, params, callback);
  },
};
