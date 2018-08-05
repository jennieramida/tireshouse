const Order = require('../models/OrderControl');

exports.add = (req,res,next) => {
<<<<<<< HEAD
  console.log(req);
};
=======
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
>>>>>>> 8114a4b2d73a033b617b587cb36a8192cb21c1f3
