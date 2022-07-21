const mongoose = require("mongoose");


const meniuSchema = new mongoose.Schema({
  category: {
    type: String,
    default: "",
  },
  foodName: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: "",
  },
  aboutFood: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  date_created: {
    type: Date,
    default: Date.now,
    unmodifiable: true,
  },
  date_updated: {
    type: Date,
    default: Date.now,
  },
 

});

// DB schema
const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Restaurant name is required"],
  },
  email: {
    type: String,
    // required: [true, "Email is required"],
    lowercase: true,
    unique: true,
  },
  address: {
    type: String,
    // required: [true, "Adress is required"],
  },
  city: {
    type: String,
    // required: [true, "City is required"],
  },
  phoneNumber: {
    type: Number,
    // required: [true, "Phone number is required"],
  },
  website: {
    type: String,
  },
  about: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  date_created: {
    type: Date,
    default: Date.now,
    unmodifiable: true,
  },
  date_updated: {
    type: Date,
    default: Date.now,
  },
  
  meniu: [meniuSchema],
  
});

// ModelDb table name
const Restaurant = new mongoose.model("Restaurant", restaurantSchema);

// Duomenų siuntimas į DB
// const testRestaurant = new Restaurant({
//   name: "Restoranas",
//   email: "restoranas@gmail.com",
//   address: "Gedimino",
//   city: "Vilnius",
//   phoneNumber: "86556846",
//   website: "www.restoranas1.lt",
//   about: "Lietuviškos virtuvės maistas",
//   meniu: [
//     {
//       category: "Pusryčiai",
//       foodName: "Kiaušinienė",
//       price: "3",
//       aboutFood: "receptas receptas receptas",
//       date: "2021-01-01",
//       date_created: "2021-02-05",
//       date_updated: "2021-02-06",
//    },
//   ],
  
// });

// testRestaurant.save();

module.exports = Restaurant;

