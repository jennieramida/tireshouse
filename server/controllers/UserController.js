const User = require('../models/User');
const bcrypt = require('bcrypt-nodejs');

exports.getProfileCustomer = (req, res, next) => {
  User.getProfileCustomer()
  .then(getOutput => {
    res.json(getOutput);
  })
  .catch(next);
}

exports.getProfileTechnician = (req, res, next) => {
  User.getProfileTechnician()
    .then(getOutput => {
      res.json(getOutput);
    })
    .catch(next);
}

exports.updateProfileCustomer = (req, res, next) => {
  const flagUser = req.body.flag;
  const usernameUser = req.body.username
  const passwordUser = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync());
  const firstnameUser = req.body.firstname;
  const lastnameUser = req.body.lastname;
  const emailUser = req.body.email;
  const mobileUser = req.body.mobile;
  const birthdayUser = req.body.birthday;
  const addressUser = req.body.address;
  const creditIdUser = req.body.creditId;
  const idUser = req.body.id;
  User.updateProfileCustomer(usernameUser, passwordUser, firstnameUser, lastnameUser, emailUser, mobileUser, birthdayUser, addressUser, creditIdUser, idUser)
  .then(updateOutput => {
    res.json("end");
  })
  .catch(next);
}

exports.updateProfileTechnician = (req, res, next) => {
  const flagUser = req.body.flag;
  const usernameUser = req.body.username
  const passwordUser = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync());
  const firstnameUser = req.body.firstname;
  const lastnameUser = req.body.lastname;
  const emailUser = req.body.email;
  const mobileUser = req.body.mobile;
  const birthdayUser = req.body.birthday;
  const addressUser = req.body.address;
  const creditIdUser = req.body.creditId;
  const idUser = req.body.id;
  User.updateProfileTechnician(usernameUser, passwordUser, firstnameUser, lastnameUser, emailUser, mobileUser, birthdayUser, addressUser, creditIdUser, idUser)
    .then(updateOutput => {
      res.json("end");
    })
    .catch(next);
}

exports.changePasswordCustomer = (req, res, next) => {
  const passwordUser = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync());
  const idUser = req.body.id;
  User.changePasswordCustomer(passwordUser, idUser)
  .then(changeOutput =>{
    res.json("end")
  })
  .catch(next);
}


exports.changePasswordTechnician = (req, res, next) => {
  const passwordUser = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync());
  const idUser = req.body.id;
  User.changePasswordTechnician(passwordUser, id)
    .then(changeOutput => {
      res.json("end")
    })
    .catch(next);
}

