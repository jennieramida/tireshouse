const User = require('../models/User');
const bcrypt = require('bcrypt-nodejs');
const { outputHandler, successHandler } = require('../middlewares')

exports.getProfileCustomer = (req, res, next) => {
  User.getProfileCustomer()
  .then(getOutput => {
    res.json(outputHandler(getOutput));
  })
  .catch(next);
}

exports.getProfileTechnician = (req, res, next) => {
  User.getProfileTechnician()
    .then(getOutput => {
      res.json(outputHandler(getOutput));
    })
    .catch(next);
}

exports.updateProfileCustomer = (req, res, next) => {
  const flagUser = req.body.flag;
  const firstnameUser = req.body.firstname;
  const lastnameUser = req.body.lastname;
  const emailUser = req.body.email;
  const mobileUser = req.body.mobile;
  const birthdayUser = req.body.birthday;
  const addressUser = req.body.address;
  const creditIdUser = req.body.creditId;
  const idUser = req.body.id;
  User.updateProfileCustomer(firstnameUser, lastnameUser, emailUser, mobileUser, birthdayUser, addressUser, creditIdUser, idUser)
  .then(updateOutput => {
    res.json(successHandler("update"));
  })
  .catch(next);
}

exports.updateProfileTechnician = (req, res, next) => {
  const flagUser = req.body.flag;
  const firstnameUser = req.body.firstname;
  const lastnameUser = req.body.lastname;
  const emailUser = req.body.email;
  const mobileUser = req.body.mobile;
  const birthdayUser = req.body.birthday;
  const addressUser = req.body.address;
  const creditIdUser = req.body.creditId;
  const idUser = req.body.id;
  User.updateProfileTechnician(firstnameUser, lastnameUser, emailUser, mobileUser, birthdayUser, addressUser, creditIdUser, idUser)
    .then(updateOutput => {
      res.json(successHandler("update"));
    })
    .catch(next);
}

exports.changePasswordCustomer = (req, res, next) => {
  const passwordUser = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync());
  const idUser = req.body.id;
  User.changePasswordCustomer(passwordUser, idUser)
  .then(changeOutput =>{
    console.log(passwordUser)
    res.json(successHandler("change password"))
  })
  .catch(next);
}


exports.changePasswordTechnician = (req, res, next) => {
  const passwordUser = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync());
  const idUser = req.body.id;
  User.changePasswordTechnician(passwordUser, id)
    .then(changeOutput => {
      res.json(successHandler("change password"))
    })
    .catch(next);
}

