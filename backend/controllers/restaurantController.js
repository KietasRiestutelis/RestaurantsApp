const Restaurant = require("./../models/restaurantModel");


// Get all restaurants
exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json({
      status: "success",
      results: restaurants.length,
      data: {
        restaurants: restaurants,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Get restaurant by id
exports.getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        restaurant: restaurant,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
 
};


exports.updateRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(
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
        restaurant: restaurant,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

  
// Create restaurant
exports.createRestaurant = async (req, res) => {
  
  try {
    const newRestaurant = await Restaurant.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        restaurant: newRestaurant,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Delete restaurant
exports.deleteRestaurant = async (req, res) => {
    try {
      await Restaurant.findByIdAndDelete(req.params.id);
  
      res.status(204).json({
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
  
  // Update restaurant meniu
exports.findMeniuAndUpdate = async (req, res) => {
  try {
    const updateMeniu = await Restaurant.findOneAndUpdate(
      { _id: req.params.id, "meniu._id": req.params.subId },
      {
        $set: {
          "meniu.$.date": req.body.date,
          "meniu.$.category": req.body.category,
          "meniu.$.foodName": req.body.foodName,
          "meniu.$.price": req.body.price,
        },
      }
    );
     res.status(200).json({
      status: "success",
      data: {
        users: updateMeniu,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
