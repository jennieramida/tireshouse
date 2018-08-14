const db = require('../db');
const Store = {};
const moment = require('moment');

Store.insertStore = (name, address, phone,) => (
  db.oneOrNone('INSERT INTO store ( name, address, phone, created_time )	VALUES($1,$2,$3,$4)',
    [name, address, phone, moment().format('YYYY-MM-DD HH:mm:ss')])
)

Store.updateStore = (name, address, phone, id) => (
  db.one('UPDATE store SET name=$1, address=$2, phone=$3, updated_time=$4 WHERE id=$5 RETURNING id',
    [name, address, phone, moment().format('YYYY-MM-DD HH:mm:ss'), id])
)

Store.deleteStore = (id) => (
  db.result('DELETE FROM store WHERE id=$1',[id])
)

Store.getStore = () => (
  db.manyOrNone('SELECT * FROM store')
);

module.exports = Store;