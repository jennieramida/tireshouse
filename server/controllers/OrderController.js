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