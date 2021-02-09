require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const nodemailer = require('nodemailer')

app.use(cors())
app.use(express.json())

app.post('/contact', async (request, response) => {
  const body = request.body
  console.log(body)
  response.json(body).status(200).end()
})

const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})