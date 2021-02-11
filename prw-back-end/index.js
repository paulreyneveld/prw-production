require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const nodemailer = require('nodemailer')
const path = require('path')
const axios = require('axios')

app.use(cors())
app.use(express.json())

app.get('/weatherapi', (req, res) => {
  const WEATHER_API_KEY = process.env.WEATHER_API_KEY
  const API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=45.4712&lon=-122.5988&units=imperial&exclude=minutely&appid=${WEATHER_API_KEY}`
  axios.get(API_URL)
    .then(weather => {
      // console.log(weather.data.hourly)
      res.send(weather.data.hourly)      
    })
    .catch(error => console.log(error))
})

app.get('/dictionaryapi', (req, res) => {
  const WEBSTERS_API_KEY = process.env.WEBSTERS_API_KEY
  const searchTerm = 'cheese'
  const API_URL = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${searchTerm}?key=${WEBSTERS_API_KEY}`
  console.log(req.query.search)
  axios.get(API_URL)
    .then(response => {
      //  console.log(response.data)
      res.send(response.data[0].shortdef)
    })
})

app.post('/contact', async (req, res) => {
  const body = req.body

  const smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD
    }
  })

  const mailOptions = {
    from: body.email,
    to: 'paul.reyneveld@gmail.com',
    subject: 'Email from PRW',
    html: `<p>${body.name}</p>
          <p>${body.email}</p>
          <p>${body.message}</p>`
  }

  smtpTransport.sendMail(mailOptions,
    (err, res) => {
      if (err) {
        res.send(err)
      }
      else {
        res.send('Success')
      }
      smtpTransport.close()
    })
  // res.json(body).status(200).end()
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'))
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
