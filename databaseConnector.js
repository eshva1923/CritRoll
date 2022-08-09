const Pool = require('pg').Pool

//TODO: replace these with ENV variables from container
const pool = new Pool({
  user: 'postgres',
  host: 'host.docker.internal',
  database: 'critroll-data',
  password: 'postgres',
  port: 5432,
})

const getDeities = (request, response) => {
    pool.query('SELECT * FROM deities ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getDeities
}