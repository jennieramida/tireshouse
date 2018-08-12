const User = require('../models/User');

exports.UpdateProfile = (req, res, next) => {
  const dataArray = req.body;
  User.updateProfile(req.userid, dataArray)
  .then( output => {
    res.json(output);
  })
  .catch(next);
  
}