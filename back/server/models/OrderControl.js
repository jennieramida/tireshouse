const db = require('../db');
const Order = {};
const moment = require('moment');

/*NEW*/
Order.insertOrder = (customer_id, location, zone_id, latitude, longitude) => (
  db.oneOrNone('INSERT INTO order_record (customer_id,  location, zone_id, latitude, longitude, order_date_time, created_time) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id',
    [customer_id, location, zone_id, latitude, longitude, moment().format('YYYY-MM-DD HH:mm:ss'), moment().format('YYYY-MM-DD HH:mm:ss')])
)

Order.insertOrderDetail = (data, order_id ) => (
  db.tx(t => {
    // creating a sequence of transaction queries:
    const queries = data.map((dt) => {
      return t.one(
        'INSERT INTO order_detail (order_id, tire_id, amount) VALUES ($1, $2, $3 ) RETURNING id',
        [order_id, dt.tireId, dt.amount]);
    });
      // returning a promise that determines a successful transaction:
    return t.batch(queries); // all of the queries are to be resolved;
  })
)

Order.updateOrder = (customer_id, process_id,  amount, order_date_time, location, zone_id, latitude, longitude) => (
  db.one('UPDATE SET  customer_id=$1, process_id=$2, amount=$3, order_date_time=$4, location=$5, zone_id=$6, latitude=$7, longitude=$8, created_time=$9, updated_time=$10 WHERE id=$11',
    [customer_id, process_id, amount, order_date_time, location, zone_id, latitude, longitude, moment().format('YYYY-MM-DD HH:mm:ss'), id])
)

Order.cancelOrder = (order_id) => (
  db.tx ( t=> {
    const q1 = t.result('DELETE FROM order_record WHERE id=$1',[prder_id])
    const q2 = t.result('DELETE FROM process_history WHERE order_id=$1 ',[order_id])
    const q3 = t.result('DELETE FROM order_detail WHERE order_id=$1 ', [order_id])
    return t.batch([q1, q2, q3]);
  })
)

Order.getOrder = () => (
  db.manyOrNone('SELECT * FROM order_record')
)

Order.getOrderById = (id) => (
  db.one('SELECT * FROM order_record WHERE id = $1 ',[id])
)

Order.getOrderByZone = (process_id, zone_id) => (
  db.manyOrNone('SELECT * FROM order_record as o , process_history as p WHERE o.id=p.order_id AND zone_id=$1 AND p.process_id=$2',
    [zone_id, process_id])
)

Order.updateOrderByTechnician = (id, technician_id) => (
  db.result('UPDATE order_record SET technician_id=$1, updated_time=$2 WHERE id=$3',
    [ technician_id, moment().format('YYYY-MM-DD HH:mm:ss'), id])
)

Order.updateOrdeyByStaff = (id, store_id) => (
  db.result('UPDATE order_record SET store_id=$1, updated_time=$2 WHERE id=$3',
    [store_id, moment().format('YYYY-MM-DD HH:mm:ss'), id])
)

Order.getOrderDetail = (order_id) => (
  db.manyOrNone('SELECT * FROM order_detail WHERE order_id=$1', [order_id])
)
// Order.updateTechnicianInOrder = (id, technician_id) => (
//   db.one('UPDATE SET technician_id=$1, updated_time=$2 WHERE id=$3',
//     [id, moment().format('YYYY-MM-DD HH:mm:ss'), technician_id])
// )

// Order.updateStaffInoirder

module.exports = Order;