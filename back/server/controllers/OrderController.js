const Order = require('../models/OrderControl');
const processHistory = require('../models/ProcessHistoryControl');
const zone = require('../models/ZoneControl');
const { outputHandler, successHandler } = require('../middlewares')

exports.createOrder = (req, res, next) => {
  const userId = req.user.id;
  const locationOrder = req.body.location;
  const latOrder = req.body.latitude;
  const longOrder = req.body.longitude;
  const orderDateTime = req.body.orderDateTime;
  const orderDetail = req.body.orderDetail;
  const zoneName = req.body.zoneName;
  
  zone.findZoneByName(zoneName)
  .then( zoneId => {
    console.log(zoneId);
    Order.insertOrder(userId, locationOrder, zoneId.id, latOrder, longOrder, orderDateTime)
    .then(orderId => {
      console.log(orderId)
      processHistory.insertProcessHistory(orderId.id)
      .then( () => {
        Order.insertOrderDetail(orderDetail, orderId.id)
        .then( () => {
          res.json(outputHandler(orderId));
        })  
        .catch(next)
      })
      .catch(next)
    })
    .catch(next)
  })
  .catch(next);
}

exports.updateOrderProgressByTechnician = (req, res, next) => {
  const technicianId = req.user.id; 
  const orderId = req.body.orderId;
  const technicianProgress = 2;
  Order.updateOrderByTechnician(orderId, technicianId)
  .then(updateTechOutput => {
    processHistory.updateProcessHistory(orderId, technicianProgress)
    .then(updateHistoryOutput => {
      res.json(successHandler("update"));
    })
    .catch(next);
  })
  .catch(next);
} 

exports.getOrderWithDeatil = (req, res, next) =>{
  const OrderId = req.body.orderId;
  console.log(req.user);
  Order.getOrderById(OrderId)
  .then( getOutputOrder => {
    Order.getOrderDetail(OrderId)
    .then(getOutputDetail =>{
      res.json(outputHandler({"order":getOutputOrder, "detail":getOutputDetail}));
    })
    .catch(next);
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

exports.cancelOrder = (req, res, next) => {
  // const customerId = req.user.id;
  const orderId = req.body.orderId;
  const technicianProgress = 0;
  processHistory.insertProcessHistoryWithCode(orderId, technicianProgress)
  .then(insertOutput => {
    console.log(insertOutput);
    res.json(outputHandler(insertOutput));
  })
  .catch(next)
}

exports.getOrderByZone = (req, res, next) => {
  const zoneId = req.query.zoneId;
  const findState = 0;
  console.log(zoneId)
  Order.getOrderByZone(findState, zoneId)
  .then(getOutput => {
    res.json(outputHandler(getOutput));
  })
}

exports.getCustomerOrderHistory = (req, res, next) => {
  const userId = req.user.id;
  Order.getOrderByCustomerId(userId)
  .then( getOutput => {
    Order.getAllOrderDetail(getOutput)
    .then(getOutputDetail => {
      processHistory.getProcessByOrderId(getOutput)
      .then(getOutputProcess =>{
        if (getOutput.length === getOutputDetail.length && getOutput.length === getOutputProcess.length){
          const sumGetOutput = []
          const lengthOutput = getOutput.length
          console.log(getOutput)
          for(var i=0 ;i<lengthOutput;i++){
            sumGetOutput[i] = ({ "order": getOutput[i], "orderDetail": getOutputDetail[i], "process": getOutputProcess[i] } )
          }
          res.json(sumGetOutput);
        } else {
          res.json("length Error")
        }
      })
      .catch(next)
    })
    .catch(next);
  })
  .catch(next);
}

exports.deleteOrder  





