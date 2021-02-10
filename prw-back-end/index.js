require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const nodemailer = require('nodemailer')
const path = require('path')

app.use(cors())
app.use(express.json())

app.post('/contact', async (request, response) => {
  const body = request.body

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
        response.send(err)
      }
      else {
        response.send('Success')
      }
      smtpTransport.close()
    })
  // response.json(body).status(200).end()
})

app.get('/*', (request, response) => {
  response.sendFile(path.join(__dirname, './build/index.html'))
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
