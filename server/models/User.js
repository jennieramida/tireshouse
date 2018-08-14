const db = require('../db');
const moment = require('moment');

const User = {};

User.createCustomer = (username, password, firstname, lastname, email, mobile, birthday, address, credit_id) => (
  db.oneOrNone('INSERT INTO customer (username, password, firstname, lastname, email, mobile, birthday, address, credit_id, created_time)	VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *',
    [username, password, firstname, lastname, email, mobile, birthday, address, credit_id, moment().format('YYYY-MM-DD HH:mm:ss')])
)

User.createTechnician = (username, password, firstname, lastname, email, mobile, birthday, address, credit_id) => (
  db.oneOrNone('INSERT INTO technician (username, password, firstname, lastname, email, mobile, birthday, address, credit_id, created_time)	VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *',
    [username, password, firstname, lastname, email, mobile, birthday, address, credit_id, moment().format('YYYY-MM-DD HH:mm:ss')])
)

User.findCustomerByUsername = username => (
  db.oneOrNone('SELECT * FROM customer WHERE username=$1', [username])
)

User.findTechnicianByUsername = username => (
  db.oneOrNone('SELECT * FROM technician WHERE username=$1', [username])
)

User.findCustomerById = id => (
  db.oneOrNone('SELECT * FROM customer WHERE id=$1',[id])
)

User.findTechnicianById = id => (
  db.manyOrNone('SELECT * FROM technician WHERE id=$1',[id])
)

User.updateProfileCustomer = (username, firstname, lastname, email, mobile, birthday, address, credit_id, id) => (
  db.one('UPDATE customer set username=$1, firstname=$2, lastname=$3, email=$4, mobile=$5, birthday=$6, address=$7, credit_id=$8, updated_time=$9 WHERE id=$10',
    [username, firstname, lastname, email, mobile, birthday, address, credit_id, moment().format('YYYY-MM-DD HH:mm:ss'), id])
)

User.updateProfileTechnician = (username, firstname, lastname, email, mobile, birthday, address, credit_id, id) => (
  db.one('UPDATE technician set username=$1, firstname=$2, lastname=$3, email=$4, mobile=$5, birthday=$6, address=$7, credit_id=$8, updated_time=$9 ,WHERE id=$10',
    [username, firstname, lastname, email, mobile, birthday, address, credit_id, moment().format('YYYY-MM-DD HH:mm:ss'), id])
)

User.changePasswordCustomer = (password, id) => (
  db.one('UPDATE customer set password=$1, updated_time=$2 WHERE id=$3 RETURNING id', [password, moment().format('YYYY-MM-DD HH:mm:ss'), id])
)

User.changePasswordTechnician = (password, id) => (
  db.one('UPDATE technician set password=$1, updated_time=$2 WHERE id=$3 RETURNING id', [password, moment().format('YYYY-MM-DD HH:mm:ss'), id])
)

User.getProfileCustomer = () => (
  db.manyOrNone('SELECT username, firstname, lastname, email, mobile, birthday, address FROM customer')
)

User.getProfileCustomer = () => (
  db.manyOrNone('SELECT username, firstname, lastname, email, mobile, birthday, address FROM technician')
)

// User.create = (user,id) => (
//   db.one('INSERT INTO users (username, password, first_name, last_name, email, mobile_num, status, birthday, address) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING username, password',
//   [
//     user.username, user.password, user.first_name, user.last_name, user.email, user.mobile_num, user.status, user.birthday, user.address 
//   ])
// )

// User.findById = id => (
//   db.oneOrNone('SELECT * FROM users WHERE user_id = $1', [id])
// );

// User.findByUsername = username => (
//   db.oneOrNone('SELECT * FROM users WHERE username = $1', [username])
// );

// User.findAll = () => (
//   db.manyOrNone('SELECT users.id, employee_info.user_id, employee_info.first_name, employee_info.last_name, employee_info.nick_name, employee_info.mobile_number, employee_info.email, employee_info.picture FROM employee_info, users WHERE users.id = employee_info.user_id AND status = $1 ORDER BY users.id', ['Active'])
// );

// User.findByName = (firstName, lastName) => (
//   db.oneOrNone('SELECT * FROM employee_info WHERE first_name = $1 AND last_name = $2', [firstName, lastName])
// );

// User.updateProfile = (id, data) => (
//   db.oneOrNone('UPDATE users SET first_name=$1, last_name=$2, email=$3, mobile_num=$4, birthday=$5, address=$6',
//   [
//     data.firstName,
//     data.lastName,
//     data.email,
//     data.mobile_num,
//     data.birthday,
//     data.address
//   ]
//   )
// )


module.exports = User;