const db = require('../db');
const Tire = {};

Tire.searchTireTypeFront = (width, series, center_wheel) => (
  db.many("SELECT * FROM tire  WHERE tire_width=$1 AND tire_series=$2 AND center_wheel=$3", [width, series, center_wheel])
)
Tire.searchTireTypeBack = (width, series, center_wheel) => (
  db.many("SELECT * FROM tire  WHERE tire_width=$1 AND tire_series=$2 AND center_wheel=$3", [width, series, center_wheel])
)


module.exports = Tire;