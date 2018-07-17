const db = require('../db');

const User = {};

// User.create = (user, id) => (
//   db.tx((transaction) => {
//     const q1 = transaction.one(
//       'INSERT INTO users (username, password, created_user, updated_user, type) VALUES ($1, $2, $3, $4, $5) RETURNING 1',
//       [
//         user.username,
//         user.password,
//         id,
//         id,
//         user.type,
//       ]
//     );
//     const q2 = transaction.one(
//       'INSERT INTO employee_info (first_name, last_name, citizen_id, created_user, updated_user, email, gender, picture) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING 1',
//       [
//         user.firstName,
//         user.lastName,
//         user.citizenId,
//         id,
//         id,
//         user.username,
//         user.gender,
//         user.picture
//       ]
//     );
//     const q3 = transaction.one(
//       'INSERT INTO employee_work (department_id, level_id, start_date, probation_date, created_user, updated_user, contract_id, engineer) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING 1',
//       [
//         user.departmentId,
//         user.levelId,
//         user.startDate,
//         user.probationDate,
//         id,
//         id,
//         user.contractId,
//         user.engineer
//       ]
//     );
//     return transaction.batch([q1, q2, q3]);
//   })
// );
User.create = (user,id) => (
  db.one('INSERT INTO users (username, password, first_name, last_name, email, mobile_num, status, birthday, address) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING username, password',
  [
    user.username, user.password, user.first_name, user.last_name, user.email, user.mobile_num, user.status, user.birthday, user.address 
  ])
)

User.findById = id => (
  db.oneOrNone('SELECT * FROM users WHERE user_id = $1', [id])
);

User.findByUsername = username => (
  db.oneOrNone('SELECT * FROM users WHERE username = $1', [username])
);

User.findAll = () => (
  db.manyOrNone('SELECT users.id, employee_info.user_id, employee_info.first_name, employee_info.last_name, employee_info.nick_name, employee_info.mobile_number, employee_info.email, employee_info.picture FROM employee_info, users WHERE users.id = employee_info.user_id AND status = $1 ORDER BY users.id', ['Active'])
);

User.findByName = (firstName, lastName) => (
  db.oneOrNone('SELECT * FROM employee_info WHERE first_name = $1 AND last_name = $2', [firstName, lastName])
);

// User.createAdmin = user => (
//   db.one(
//     'INSERT INTO users (username, password, created_user, updated_user, type, status, id) VALUES ($1, $2, $3, $4, $5, $6, $7)',
//     [
//       user.username,
//       user.password,
//       10000,
//       10000,
//       1,
//       'Active',
//       10000
//     ]
//   )
// );

module.exports = User;