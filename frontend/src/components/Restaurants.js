import { getAllRestaurants } from "../api/libraries/apiLibraries";
import React, { useState, useEffect} from "react";
import RestaurantCard from "./RestaurantCard";



function Restaurants() {
   const [restaurants, setRestaurants] = useState ([]);
  
   
  useEffect(() => {
    getAllRestaurants().then ((res) => {
      setRestaurants(res.data.data.restaurants);
      // console.log(res.data.data.restaurants);
      
    })
  }, []);

    const restaurant = restaurants.map((item) => {
        return (
            <RestaurantCard
                key={item._id}
                name={item.name}
                address={item.address}
                about={item.about}
                meniu={item.meniu.aboutFood}
                phoneNumber={item.phoneNumber}
                website={item.website}
                id={item._id}
            />
        )
    })
  return (
    <div >
        <div className="my-3 py-5">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Restoranai:</h1>
                </div>
            </div>
            <div className="row justify-content-center">{restaurant}
                
            </div>

        </div>
    </div>
  )
}

export default Restaurants