import { getRestaurantById } from "../api/libraries/apiLibraries";
import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import MeniuCard from "./MeniuCard";

function RestaurantProfile() {
    const [restaurantProfile, setRestaurantProfile] = useState([]);
    const [restaurantName, setRestaurantName] = useState("")
   
    let { restorauntName } = useParams();
    //  console.log("restorano " + restorauntName)

    useEffect(() => {
        getRestaurantById(restorauntName).then ((res) => {
          setRestaurantProfile(res.data.data.restaurant.meniu);
          // console.log(res.data.data.restaurant.name)
          setRestaurantName(res.data.data.restaurant.name)
         
        })
      }, []);
  


      const meniu = restaurantProfile.map((item)=>{
          return(
            <MeniuCard
                key={item._id}
                restaurantName={restaurantName}
                category={item.category}
                foodName={item.foodName}
                price={item.price}
                aboutFood={item.aboutFood}
                foodId={item._id}
            />
          )
      })
    
    return (
      <div className="container">
        <div className="row">
            <div className="col-6 ">
                <h3>Restorano {restaurantName} meniu:</h3>
                {meniu}
            </div>
        </div>
      </div>
    )
}

export default RestaurantProfile