const UserOrder = require("../models/orderModel");

// Get all users 
exports.getAllOrders = async (req, res) => {
    try {
      const orders = await UserOrder.find();
      res.status(200).json({
        status: "success",
        results: orders.length,
        data: {
          orders: orders,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  };

// Get user order by id
exports.getOrderById = async (req, res) => {
  try {
    const order = await UserOrder.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        order: order,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Create new order
exports.createUserOrder = async (req, res) => {
  
  try {
    const newOrder = await UserOrder.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        order: newOrder,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Add user cart item
exports.createUserOrderItem = async (req, res) => {
  console.log(req.params.id);
  console.log(req.params.subId);
  try {
    const updated = await UserOrder.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { orderItem: req.body } },
      {
        new: true,
      }
    );
    console.log(updated);
    res.status(200).json({
      status: "success",
      data: {
        order: updated,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};


// Update order status
exports.updateOrderStatusById = async (req, res) => {
  try {
    const orderStatus = await UserOrder.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: "success",
      data: {
        order: orderStatus,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
