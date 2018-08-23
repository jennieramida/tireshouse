const Order = require('../models/OrderControl');
const processHistory = require('../models/ProcessHistoryControl')
const { outputHandler, successHandler } = require('../middlewares')

exports.createOrder = (req, res, next) => {
  const userId = req.user.id;
  const locationOrder = req.body.location;
  const latOrder = req.body.latitude;
  const longOrder = req.body.longitude;
  const orderDateTime = req.body.orderDateTime;
  const orderDetail = req.body.orderDetail;
  Order.insertOrder(userId, locationOrder, latOrder, longOrder, orderDateTime)
  .then(orderId => {
    processHistory.insertProcessHistory(orderId.id)
    .then( () => {
      Order.insertOrderDetail(orderDetail, orderId.id)
      .then( () => {
        res.json(successHandler("insert"));
      })  
      .catch(next)
    })
    .catch(next)
  })
  .catch(next)
}

exports.updateOrderProgressByTechnician =(req, res, next) => {
  const technicianId = req.user.id;
  const zoneId = req.body.zoneId;
  Order.updateOrder(technicianId,zoneId)
  .then(()=>{
    Order.updateOrderProgressByTechnician(order)
    .then(()=>{
      res.json(successHandler("update"));
    })
    .catch(next)
  })
  .catch(next);
} 

exports.getOrder = (req, res, next) => {
  Order.getOrder()
  .then(getOutput=>{
    res.json(outputHandler(getOutput));
  })
}

exports.deleteOrder = (req, res, next) => {
  Order.deleteOrder(id)
  .then( deleteOutput => {
    res.json(successHandler("delete"));
  })
  .catch(next);
}

// exports.updateOrderProgressByStaff = (req, res, next) => {
//   const technicianId = req.user.id;
//   const zoneOrder = req.body.zoneId;
//   const storeOrder = req.body.storeId;
  
// }

exports.deleteOrder  





