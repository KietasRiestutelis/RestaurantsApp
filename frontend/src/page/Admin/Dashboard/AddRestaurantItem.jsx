import React, { useState, useEffect } from 'react';
import { getAllRestaurants }  from "../../../api/libraries/apiLibraries";
import RestaurantListCard from './RestaurantListCard';
import "../Dashboard/Style/RestaurantListTable.css";

function AddRestaurantItem() {
    const [restaurants, setRestaurants] = useState ([]);
  
   
  useEffect(() => {
    getAllRestaurants().then ((res) => {
      setRestaurants(res.data.data.restaurants);
    //   console.log(res.data.data.restaurants);
      
    })
  }, []);

  const restaurant = restaurants.map((item) => {
    return (
        <RestaurantListCard
            key={item._id}
            name={item.name}
            address={item.address}
            about={item.about}
            meniu={item.meniu.aboutFood}
            phoneNumber={item.phoneNumber}
            city={item.city}
            email={item.email}
            id={item._id}
        />
    )
})


  return (
    <div className="RestaurantList-container">
        <table className="RestaurantList-body">
          <thead className="RestaurantList-thead">
            <tr>
              <th>Pavadinimas</th>
              <th>Adresas</th>
              <th>Miestas</th>
              <th>El.paštas</th>
              <th>Tel.nr</th>
              <th>Aprašymas</th>
            </tr>
          </thead>
          <tbody>{restaurant}</tbody>
        </table>
      </div>
  )
}

export default AddRestaurantItem