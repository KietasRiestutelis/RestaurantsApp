import React, { useState } from "react";
import AddNewRestaurant from "./Dashboard/AddNewRestaurant";
import Orders from "./Dashboard/Orders";
import UpdateRestaurant from "./Dashboard/UpdateRestaurant";


function Dashboard() {
  const [display, setDisplay] = useState("orders");
  return (
    <div className="Dashboard-container">
      <div className="Dashboard-body m-2 d-flex justify-content-center">
        <button  className="mx-2 btn btn-secondary" onClick={() => setDisplay("orders")}>Užsakymai</button>
        <button className="mx-2 btn btn-secondary" onClick={() => setDisplay("addNewRestaurant")}>Pridėti naują restoraną</button>
        <button className="mx-2  btn btn-secondary">Atnaujinti restorano meniu</button>
        <button className="mx-2  btn btn-secondary">Vartotojai</button>
       
      </div>

      {display == "orders" && <Orders />}
      {display == "addNewRestaurant" && <UpdateRestaurant />}
    
    </div>
  );
}

export default Dashboard;