require('dotenv').config();
const express = require('express')
const cors = require('cors')
const jsonServer = require('json-server')

const app = express()

app.use(cors())
app.use(express.static('anecdotes/build'))
app.use('/api', jsonServer.router('db.json'))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on ${PORT}`);
});