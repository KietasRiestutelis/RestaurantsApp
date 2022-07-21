const express = require("express");

const {
    getAllUsers,
    getUserById,
    createUser,
    deleteUserCartItem,
    createUserCartItem,
    getUserCartById,
    findUserCartItemAndUpdate,
    getAllUserCartItems,
    
  } = require("./../controllers/userAndCartControllers");

  const router = express.Router();


  router.route("/users").get(getAllUsers).post(createUser);
  router.route("/user/:id").get(getUserById);
  router.route("/:id/cartItem").post(createUserCartItem); // patch?
  router.route("/:id/userCartItem/:subId").get(getUserCartById);
  router.route("/:id/userCartItems").get(getAllUserCartItems);
  router.route("/:id/cartItem/:subId").post(findUserCartItemAndUpdate); // patch??
  router.route("/:id/deleteCartItem/:subId").delete(deleteUserCartItem); // patch?

  module.exports = router;