const db = require('../db');
const Store = {};
const moment = require('moment');

Store.insertStore = (name, address, phone,) => (
  db.oneOrNone('INSERT INTO store ( name, address, phone, created_date )	VALUES($1,$2,$3,$4)',
    [name, address, phone, oment().format('YYYY-MM-DD HH:mm:ss')])
)

Store.updateStore = (name, address, phone,) => (
  db.one('UPDATE store SET name=$1, address=$2, phone=$3 WHERE id=$4',
    [name, address, phone, id])
)

Store.deleteStore = (id) => (
  db.result('DELTE FROM store WHERE id=$1',[id])
)

Store.getStore = () => (
  db.manyOrNone('SELECT * FROM store')
)