require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/jobsdb2',
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  }
}

