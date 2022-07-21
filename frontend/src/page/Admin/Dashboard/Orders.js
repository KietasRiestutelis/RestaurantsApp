import React, { useState, useEffect } from "react";
import { getAllOrders } from "../../../api/libraries/orderLibraries";
import OrdersTable from "./OrdersTable";

function Orders() {

    const [order, setOrder] = useState ([]);
   

    useEffect(() => {
        RenderOrders()
        
    }, []);

     function RenderOrders() {
        getAllOrders().then ((res) => {
          setOrder(res.data.data.orders);
        //   console.log(res.data.data.orders)
        
        })
        
    }

      const orderItem = order.map((item)=>{
        return(
            <OrdersTable
                key={item._id}
                date={item.date_created}
                orderStatus={item.orderStatus}
                suma={item.suma}
                userId={item.userId}
                userName={item.userName}
                id={item._id}
                RenderOrders={RenderOrders}
                
                
                />
        )
      })


  return (
    <>
    <div className="container">
        <h3>Visi užsakymai</h3>
      <table className="table">
      <thead>
        <tr>
          <th>Užsakymo data</th>
          <th>Užsakymo id</th>
          <th>Vartotojas</th>
          <th>Užsakymo visa suma</th>
          <th>Užsakymo būsena</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>{orderItem}</tbody>
      </table>
      </div>
      </>
  )
}

export default Orders