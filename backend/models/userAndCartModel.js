const mongoose = require("mongoose");

const userCartSchema = new mongoose.Schema({
    date_created: {
        type: Date,
        default: Date.now,
        unmodifiable: true,
      },
    price: {
        type: Number,
    },
    foodName: {
        type: String,
    },
    restaurantName: {
        type: String,
    },
    unit: {
        type: Number,
        default: 1,
    },
    status:{
      type: String,
      
    }
});

const userSchema = new mongoose.Schema({
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      minlength: [8, "Password is too short (Minimum length is 8)"],
      required: [true, "Password is required"],
    },
  
    cart: [userCartSchema]
    
  });


const User = new mongoose.model("User", userSchema);



// Duomenų siuntimas į DB
// const testUser = new User({
//     role: "user",
//     username: "Janina",
//     email: "janinda@gmail.com",
//     password: "A12345678",
//     cart: [],
// });

// testUser.save();

module.exports = User;
