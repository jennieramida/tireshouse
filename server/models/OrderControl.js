const db = require('../db');
const Order = {};
const moment = require('moment');


Order.addProcessTech = (userid, address) => (
  db.oneOrNone('INSERT INTO process_tech (name, date ) VALUES ($1, $2 ) RETURNING processtech_id',
    ['', moment().format('YYYY-MM-DD HH:mm:ss')] )
)

Order.addOrder = (userid, products, processtech_id) => (
  db.tx(t => {
    // creating a sequence of transaction queries:
    const queries = products.map( (prod) => {
      return t.one(
        'INSERT INTO orders (user_id, tire_id, process_id, amount, price) VALUES ($1, $2, $3, $4, $5) RETURNING order_id ',
        [userid, prod.id, processtech_id.processtechId, prod.amount, prod.price]);
    });
    // t.one('INSERT');
    
     // returning a promise that determines a successful transaction:
    return t.batch(queries); // all of the queries are to be resolved;
  })
)

module.exports = Order;