const Order = require('../models/OrderControl');

exports.add = (req,res,next) => {

  const bodyProducts = req.body.products;
  const bodyAddress = req.body.address;
  const userid = req.user.userId;
  // console.log(bodyAddress,bodyProducts,userid)
  // res.end();
  Order.addProcessTech(userid, bodyAddress)
  .then(proc_id =>{
    Order.addOrder(userid, bodyProducts, proc_id)
    .then(result => {
      console.log(result)
      res.json(result);
    })
    .catch(next);
  })
  .catch(error=>{
    console.log(error);
  });
}
exports.getOrder = (req,res,next) => {
  // const orderId = req.body.orderId;
  const userId = req.user.userId;
  
  Order.getOrderDetail(userId)
  .then( ouput => {
    res.json(output);
  })
}

exports.getLastOrder = (req,res,next) => {
  const userId = req.user.userId;

  Order.getLastOrderDetail(userId)
    .then(ouput => {
      res.json(output);
    })
}

exports.updateOrder = (req,res,next) => {
  
}

