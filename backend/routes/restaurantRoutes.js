const express = require("express");

const {
  getAllRestaurants,
  createRestaurant,
  updateRestaurantById,
  getRestaurantById,
  deleteRestaurant,
  findMeniuAndUpdate,
} = require("./../controllers/restaurantController");

const router = express.Router();

router.route("/").get(getAllRestaurants).post(createRestaurant);
router.route("/restaurant/:id").get(getRestaurantById);
router.route("/:id/updateRestaurant").patch(updateRestaurantById);
router.route("/:id/deleteRestaurant").delete(deleteRestaurant);
router.route("/:id/updateMeniu/:subId").patch(findMeniuAndUpdate);

module.exports = router;