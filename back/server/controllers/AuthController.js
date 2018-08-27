const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
const User = require('../models/User');
const { outputHandler } = require('../middlewares')
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
        } else {
          res.json('Incorrect Password')
        }
      } else {
        res.json('Incorrect Username or Password')
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
          } else {
            res.json('Incorrect Password')
          }
        } else {
          res.json('Incorrect Username or Password')
        }
      })
      .catch(next);
  }
};

exports.signup = (req, res, next) => {
  console.log(req.body);
 
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
          const token = jwt.sign({
            id: createdUser.id,
            username: createdUser.username
          }, jwtSecret);
          res.json(outputHandler({
            createdUser,
            token
          }));

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
              const token = jwt.sign({
                id: createdUser.id,
                username: createdUser.username
              }, jwtSecret);
              res.json(outputHandler({
                createdUser,
                token
              }));

            })
            .catch(next)
        }
      })
      .catch(next)
  }
};