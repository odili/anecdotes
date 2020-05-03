const express = require('express')
const cors = require('cors')
const jsonServer = require('json-server')

const app = express()

app.use(cors())
app.use(express.static('anecdotes/build'))
app.use('/api', jsonServer.router('db.json'))

app.listen(3000, () => {
  console.log(`🚀 Server running on 3000`);
});