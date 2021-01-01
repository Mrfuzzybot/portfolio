const Time = require('../models/Time')
const moment = require('moment')
const errorHandler = require('../utils/errorHandler')

module.exports.start = async function(req, res) {
  const time = new Time({
    started: Date.now(),
    user: req.user.id,
    date: moment(Date.now()).format('DD.MM.YYYY')
  })
  const startedTime = await Time.findOne({user: req.user.id, ended: undefined})
  try {
    if (startedTime) {
      errorHandler(res, 'Time is already going')
    } else {
      await time.save()
    }
    res.status(200).json({message: 'started', started: time.started})
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.end = async function(req, res) {
  try {
    const startTime = await Time.findOne({user: req.user.id, ended: undefined})
    if (startTime) {
      const updatedTime = await Time.findOneAndUpdate(
        {_id: startTime._id},
        {$set: {ended: Date.now()}},
        {new: true}
      )
      res.status(200).json({message: 'ended', updatedTime})
    } else {
      errorHandler(res, 'startTime not found')
    }
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.get = async function(req, res) {
  try {
    const query = {
      user: req.user.id
    }

    if (req.query.start && !req.query.end) {
      query.date = moment(req.query.date).format('DD.MM.YYYY')
    }

    if (req.query.start && req.query.end) {
      query.start = {
        $gte: moment(req.query.start).format('DD.MM.YYYY'),
        $lte: moment(req.query.end).format('DD.MM.YYYY')
      }
    }

    const times = await Time.find(query)

    res.status(200).json(times)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.remove = async function(req, res) {
  try {
    await Time.remove({_id: req.params.id})

    res.status(200).json({
      message: 'Время удалено'
    })
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.comment = async function(req, res) {
  try {
    const time = await Time.findOne({id: req.query.id})
    if (time) {
      const updatedTime = await Time.findOneAndUpdate(
        {_id: time.id},
        {$set: {comment: req.body.comment}},
        {new: true}
      )
      res.status(200).json({message: 'Commented', updatedTime})
    } else {
      errorHandler(res, 'Incorrect id')
    }
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.getStatus = async function(req, res) {
  const startedTime = await Time.findOne({user: req.user.id, ended: undefined})
  try {
    if (startedTime) {
      res.status(200).json({message: 'Founded', startedTime})
    } else {
      res.status(200).json({message: 'Not founded'})
    }
  } catch (e) {
    errorHandler(res, e)
  }
}
