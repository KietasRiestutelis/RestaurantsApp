const express = require("express");

const {
    getAllOrders,
    createUserOrder,
    createUserOrderItem,
    getOrderById,
    updateOrderStatusById,
   
  } = require("./../controllers/orderControllers");

  const router = express.Router();


  router.route("/orders").get(getAllOrders).post(createUserOrder);
  router.route("/orders/:id").get(getOrderById);
  router.route("/createOrderItem").post(createUserOrderItem); // patch?
  router.route("/:id/updateOrderStatus").post(updateOrderStatusById); // patch?
 

  module.exports = router;