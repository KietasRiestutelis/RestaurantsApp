const mongoose = require("mongoose");


const orderItem = new mongoose.Schema({
    
    price: {
        type: Number,
    },
    foodName: {
        type: String,
    },
    restaurantName: {
        type: String,
    },
    restaurantId:{
        type: String,
    },
    unit: {
        type: Number,
    },

});


const userOrderSchema = new mongoose.Schema({
    date_created: {
        type: Date,
        default: Date.now,
        unmodifiable: true,
      },
    suma: {
        type: Number,
    },
    userId:{
        type: String,
    },
    userName: {
        type: String,
       
    },
    orderStatus: {
        type: String,
        default: "Waiting",
      
    },
    userCart: [orderItem]
});


const UserOrder = new mongoose.model("Order", userOrderSchema);

// Duomenų siuntimas į DB
// const testUser = new User({

//     role: "user",
//     username: "Janina",
//     email: "janinda@gmail.com",
//     password: "A12345678",
//     cart: [],
// });

// testUser.save();

module.exports = UserOrder;