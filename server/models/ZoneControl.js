const db = require('../db');
const Zone = {};
const moment = require('moment');

Zone.insertZone = (zone_name, latitude, longitude) => (
  db.oneOrNone('INSERT INTO zone (zone_name, latitude, longitude, created_date)	VALUES($1,$2,$3,$4) ',
    [zone_name, latitude, longitude, moment().format('YYYY-MM-DD HH:mm:ss')])
)

Zone.updateZone = (zone_name, latitude, longitude, id) => (
  db.one('UPDATE zone set zone_name=$1,latitude=$2,longitude=$3 WHERE id=$4' ,
    [zone_name, latitude, longitude, id])
)

Zone.deleteZone = (id) => (
  db.one('DELETE FROM zone WHERE id=$1',[id])
)

Zone.getZone = () => (
  db.manyOrNone('SELECT * FROM zone')
)
