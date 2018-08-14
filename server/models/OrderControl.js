const db = require('../db');
const Order = {};
const moment = require('moment');

/* OLD*/ 
Order.addProcessTech = (userid, address) => (
  db.oneOrNone('INSERT INTO process_tech (name, date, status ) VALUES ($1, $2, $3 ) RETURNING processtech_id',
    ['', moment().format('YYYY-MM-DD HH:mm:ss'),'สินค้าใหม่'] )
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

Order.getOrderDetail = ( userid) => {
  db.manyOrNone('SELECT * FROM process_tech as Proc, Orders as Ord WHERE Proc.processtech_id=Ord.process_id AND Ord.user_id=$1 ',
  [ userid] )
}

Order.getLastOrderDetail = (userid) => {
  db.manyOrNone('process_tech as Proc, Orders as Ord WHERE Proc.processtech_id=Ord.process_id AND Ord.user_id=$1 AND status=$1',
    [userid,'สินค้าใหม่'])
}
/*NEW*/
Order.insertOrder = (customer_id, location, Zone, lat, long, order_date) => (
  db.oneOrNone('INSERT INTO order_record (customer_id, process_id,  amount, order_date_time, location, zone_id, latitude, longitude, created_time) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)',
    [customer_id, process_id,  amount, order_date_time, location, zone_id, latitude, longitude, moment().format('YYYY-MM-DD HH:mm:ss')])
)

Order.updateOrder = (customer_id, process_id,  amount, order_date_time, location, zone_id, latitude, longitude) => (
  db.one('UPDATE SET  customer_id=$1, process_id=$2, amount=$3, order_date_time=$4, location=$5, zone_id=$6, latitude=$7, longitude=$8, created_time=$9, updated_time=$10 WHERE id=$11',
    [customer_id, process_id, amount, order_date_time, location, zone_id, latitude, longitude, moment().format('YYYY-MM-DD HH:mm:ss'), id])
)

Order.updateTechnicianInOrder = (id, technician_id) => (
  db.one('UPDATE SET technician_id=$1, updated_time=$2 WHERE id=$3',
    [id, moment().format('YYYY-MM-DD HH:mm:ss'), technician_id])
)

// Order.insertOrderDetail = () => (
//   // db.oneOrNone
// )

module.exports = Order;