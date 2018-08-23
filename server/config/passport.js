const passportJwt = require('passport-jwt');
const JwtStrategy = require('passport-jwt').Strategy;
const User = require('../models/User');

const jwtOptions = {};
jwtOptions.jwtFromRequest = passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = process.env.JWT_SECRET;

module.exports = (passport) => {
  const strategy = new JwtStrategy(jwtOptions, (jwtPayload, cb) => {
    console.log('customer');
      User.findCustomerById(jwtPayload.id)
      .then((userCustomer) => {
        if (userCustomer) {
          console.log(userCustomer)
          userCustomer.flag = 'customer';
          cb(null, userCustomer);
        }
        else {
          cb(null, false);
        }
      })
      .catch(error => cb(error));
  });
  const strategy2 = new JwtStrategy(jwtOptions, (jwtPayload, cb) => {
    console.log('technician');
    User.findTechnicianById(jwtPayload.id)
      .then((userTechnician) => {
        if (userTechnician) {
          // userTechnician.flag = 'customer';
          cb(null, userTechnician);
        }
        else {
          cb(null, false);
        }
      })
      .catch(error => cb(error));
  });
  passport.use('jwtcust', strategy);
  passport.use('jwttech',strategy2);
};
