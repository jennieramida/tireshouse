const Store = require('../models/StoreControl');

exports.getStore = (req, res, next) => {
  Store.getStore()
  .then(storeOuput=> {
    res.json(storeOuput);
  })
  .catch(next);
}

exports.insertStore = (req, res, next) => {
  const nameStore = req.body.nameStore;
  const addressStore = req.body.addressStore;
  const phoneStore = req.body.phoneStore;
  Store.insertStore(nameStore, addressStore, phoneStore)
  .then(insertOutput => {
    res.json("end")
  })
  .catch(next);
}

exports.deleteStore = (req, res, next) => {
  const idStore = req.body.idStore;
  Store.deleteStore(idStore)
  .then(deleteOutput => {
    res.json("end");
  })
  .catch(next);
}

exports.updateStore = (req, res, next) => {
  const nameStore = req.body.nameStore;
  const addressStore = req.body.addressStore;
  const phoneStore = req.body.phoneStore;
  const idStore = req.body.idStore;
  Store.updateStore(nameStore, addressStore, phoneStore, idStore)
  .then( updateOutput => {
    res.json("end");
  })
  .catch(next)
}