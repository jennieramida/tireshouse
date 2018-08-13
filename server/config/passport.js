const passportJwt = require('passport-jwt');
const JwtStrategy = require('passport-jwt').Strategy;
const User = require('../models/User');

const jwtOptions = {};
jwtOptions.jwtFromRequest = passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = process.env.JWT_SECRET;

module.exports = (passport) => {
  const strategy = new JwtStrategy(jwtOptions, (jwtPayload, cb) => {
    console.log(jwtPayload);
      User.findCustomerById(jwtPayload.id)
      .then((userCustomer) => {
        if (userCustomer) {
          userCustomer.flag = 'customer';
          cb(null, userCustomer);
        }
        else {
          User.findTechnicianById(jwtPayload.id)
          .then((userTechnician)=>{
            if (userTechnician) {
              userTechnician.flag = 'technician';
              cb(null, userTechnician);
            }
            else {
              cb(null, false);
            }
          })
            .catch(error => cb(error));
        }
      })
      .catch(error => cb(error));
  });
  passport.use(strategy);
};
