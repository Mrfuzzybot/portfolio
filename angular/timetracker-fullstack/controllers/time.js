const Time = require('../models/Time')
const errorHandler = require('../utils/errorHandler')

module.exports.start = async function(req, res) {
  const time = new Time({
    started: Date.now(),
    user: req.user.id,
  })
  try {
    await time.save()
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
