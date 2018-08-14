const db = require('../db');
const Tires = {};
const moment = require('moment');

Tires.searchTireTypeFront = (width, series, center_wheel) => (
  db.many("SELECT * FROM tire  WHERE tire_width=$1 AND tire_series=$2 AND center_wheel=$3 ", [width, series, center_wheel])
)
Tires.searchTireTypeBack = (width, series, center_wheel) => (
  db.many("SELECT * FROM tire  WHERE tire_width=$1 AND tire_series=$2 AND center_wheel=$3", [width, series, center_wheel])
)

Tires.searchInfo = () => (
  db.tx(t => {
    // creating a sequence of transaction queries:
    const q1 = t.manyOrNone('SELECT DISTINCT tire_width FROM tire');
    const q2 = t.manyOrNone('SELECT DISTINCT tire_series FROM tire');
    const q3 = t.manyOrNone('SELECT DISTINCT center_wheel FROM tire');
    // returning a promise that determines a successful transaction:
    return t.batch([q1, q2, q3]); // all of the queries are to be resolved;
  })
)

Tires.insertTire = (brand, model, name, width, series, size, price) => (
  db.oneOrNone('INSERT INTO tires (brand, model, name, width, series, size, price, created_time) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
    [brand, model, name, width, series, size, price, moment().format('YYYY-MM-DD HH:mm:ss')])
)

Tires.updateTire = (brand, model, name, width, series, size, price, id) => (
  db.one('UPDATE tires SET brand=$1, model=$2, name=$3, width=$4, series=$5, size=$6, price=$7 WHERE id=$8 RETURNING id',
    [brand, model, name, width, series, size, price, id])
)

Tires.getTire =() => (
  db.manyOrNone('SELECT * FROM tires')
)

Tires.deleteTire = id => (
  db.result('DELETE FROM tires WHERE id=$1', [id])
)

module.exports = Tires;