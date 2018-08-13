const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
const User = require('../models/User');

const jwtSecret = process.env.JWT_SECRET;

exports.signin = (req, res, next) => {
  console.log(req.body)
  const flagUser = req.body.flag;
  const usernameUser = req.body.username
  const passwordUser = req.body.password
  if(flagUser==='customer') {
    User.findCustomerByUsername(usernameUser)
    .then((user) => {
      if(user) {
        if (bcrypt.compareSync(passwordUser, user.password)) {
          const token = jwt.sign({
            id: user.id,
            username: user.username
          }, jwtSecret);
          res.json({
            id: user.id,
            username: user.username,
            token
          });
        }
      }
    })
    .catch(next);
  } else {
    User.findTechnicianByUsername(usernameUser)
      .then((user) => {
        if (user) {
          if (bcrypt.compareSync(passwordUser, user.password)) {
            const token = jwt.sign({
              id: user.id,
              username: user.username
            }, jwtSecret);
            res.json({
              id: user.id,
              username: user.username,
              token
            });
          }
        }
      })
      .catch(next);
  }
};

exports.signup = (req, res, next) => {
  console.log(req.body);
  // username, password, firstname, lastname, email, mobile, birthday, address, credit_id
  // const newUser = req.body.user;
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
  if(flagUser === 'customer'){
    User.findCustomerByUsername(usernameUser)
    .then((user) => {
      if (user) {
        const err = new Error('User already exist');
        err.status = 409;
        next(err);
      }
      else {
        User.createCustomer(usernameUser, passwordUser, firstnameUser, lastnameUser, emailUser, mobileUser, birthdayUser, addressUser, creditIdUser)
        .then((createdUser) => {
          res.json(createdUser);
        })
        .catch(next)
      }
    })
    .catch(next)
  } else {
    User.findTechnicianByUsername(usernameUser)
      .then((user) => {
        if (user) {
          const err = new Error('User already exist');
          err.status = 409;
          next(err);
        }
        else {
          User.createTechnician(usernameUser, passwordUser, firstnameUser, lastnameUser, emailUser, mobileUser, birthdayUser, addressUser, creditIdUser)
            .then((createdUser) => {
              res.json(createdUser);
            })
            .catch(next)
        }
      })
      .catch(next)
  }
};
