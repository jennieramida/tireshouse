const Store = require('../models/StoreControl');
const { outputHandler, successHandler } = require('../middlewares')

exports.getStore = (req, res, next) => {
  Store.getStore()
  .then(storeOuput=> {
    res.json(outputHandler(storeOuput));
  })
  .catch(next);
}

exports.insertStore = (req, res, next) => {
  const nameStore = req.body.nameStore;
  const addressStore = req.body.addressStore;
  const phoneStore = req.body.phoneStore;
  Store.insertStore(nameStore, addressStore, phoneStore)
  .then(insertOutput => {
    res.json(successHandler("insert"))
  })
  .catch(next);
}

exports.deleteStore = (req, res, next) => {
  const idStore = req.body.idStore;
  Store.deleteStore(idStore)
  .then(deleteOutput => {
    res.json(successHandler("delete"));
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
    res.json(successHandler("update"));
  })
  .catch(next)
}