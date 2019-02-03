const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const api = require('./api.js')
const rp = require('request-promise')
const cheerio = require('cheerio')
const app = express()

const corsOptions = {
  origin: 'http://localhost:3000'
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('static'))

app.get('/:sign', (req, res) => {
  const sign = req.params.sign
}
)

app.listen(4000, () => {
  console.log('listening on port 4000')
})
