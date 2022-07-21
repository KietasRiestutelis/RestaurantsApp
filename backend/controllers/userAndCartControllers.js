const User = require("../models/userAndCartModel");


// Get all users 
exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json({
        status: "success",
        results: users.length,
        data: {
          users: users,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  };

// Get user by id
exports.getUserById = async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        users: users,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Create new user
exports.createUser = async (req, res) => {
  
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

//get all user cart items
exports.getAllUserCartItems = async (req, res) => {
  try {
    const cartItems = await User.cart[0].find();
    res.status(200).json({
      status: "success",
      results: cartItems.length,
      data: {
        cart: cartItems,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Get user cart by id
exports.getUserCartById = async (req, res) => {
  try {
    const userCart = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        cart: userCart,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// DELETE method user cart item, array
  exports.deleteUserCartItem = async (req, res) => {
    console.log(req.params.id);
    console.log(req.params.subId);
  
    try {
      await User.findOneAndUpdate(
        { _id: req.params.id },
        { $pull: { cart: { _id: req.params.subId } } }
      );
      res.status(200).json({
        status: "success",
        data: null,
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  };



// Add user cart item
exports.createUserCartItem = async (req, res) => {
  // console.log(req.params.id);
  // console.log(req.params.subId);
  try {
    const updated = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { cart: req.body } },
      {
        new: true,
      }
    );
    console.log(updated);
    res.status(200).json({
      status: "success",
      data: {
        cart: updated,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

 // Update user cart item
 exports.findUserCartItemAndUpdate = async (req, res) => {
  try {
    const updateCart = await User.findOneAndUpdate(
      { _id: req.params.id, "cart._id": req.params.subId },
      {
        $set: {
          // "cart.$.date": req.body.date,
          // "cart.$.price": req.body.price,
          "cart.$.unit": req.body.unit,
        },
      }
    );
     res.status(200).json({
      status: "success",
      data: {
        cart: updateCart,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};


// delete all user cart items

// exports.testas = async (req, res) => {
 
//   try {
//      const users = await User.findById(req.params.id);
//      var cartItems = users.cart
//      var status = "confirmed"

//      cartItems.forEach((item)=>{
//       if(item.status == "waiting"){
//         item.status += status
//       }
//      })


//     const cartt = await cartItems.updateMany({foodName: "Jons",});
//     res.status(200).json({
//       status: "success",
//       results: users.length,
//       data: {
//         cart: cartt,
//       },
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: "fail",
//       message: err,
//     });
//   }
// };






