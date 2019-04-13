const express = require('express')
const authRouter = require('./routes/auth-routes')

const app = express()

app.use('/auth', authRouter)

app.get('/login', function (req, res) {
  res.send('Hello World!')
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})  