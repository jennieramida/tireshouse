const db = require('../db');
const Tire = {};

Tire.searchTireTypeFront = (width, series, center_wheel) => (
  db.many("SELECT * FROM tire  WHERE tire_width=$1 AND tire_series=$2 AND center_wheel=$3 ", [width, series, center_wheel])
)
Tire.searchTireTypeBack = (width, series, center_wheel) => (
  db.many("SELECT * FROM tire  WHERE tire_width=$1 AND tire_series=$2 AND center_wheel=$3", [width, series, center_wheel])
)

Tire.searchInfo = () => (
  db.tx(t => {
    // creating a sequence of transaction queries:
    const q1 = t.manyOrNone('SELECT DISTINCT tire_width FROM tire');
    const q2 = t.manyOrNone('SELECT DISTINCT tire_series FROM tire');
    const q3 = t.manyOrNone('SELECT DISTINCT center_wheel FROM tire');
    // returning a promise that determines a successful transaction:
    return t.batch([q1, q2, q3]); // all of the queries are to be resolved;
  })
)


module.exports = Tire;