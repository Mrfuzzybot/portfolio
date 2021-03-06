const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const passport = require('passport')
const keys = require('./config/keys')
const authRoutes = require('./routes/auth')
const timeRoutes = require('./routes/time')
const bodyParser = require('body-parser')
const app = express()

mongoose
  .connect(keys.mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log('MongoDb connected.'))
  .catch(e => console.log('error', e))
mongoose.set('useCreateIndex', true)

app.use(passport.initialize())
require('./middleware/passport')(passport)
app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())

app.use('/api/auth', authRoutes)
app.use('/api/time', timeRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/dist/timetracker'))

  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(
        __dirname, 'client', 'dist', 'timetracker', 'index.html'
      )
    )
  })
}

module.exports = app
