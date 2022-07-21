import React from "react";
import { updateOrderStatusById } from "../../../api/libraries/orderLibraries";
import "../Dashboard/Style/Dashboard.css"


function OrdersTable({
 date, 
 orderStatus,
 suma,
 userName,
 id,
 RenderOrders,
  
  
}) 
    {
      
        function confirmStatus(){
            let data = {
                orderStatus: "Confirmed"
              }
            updateOrderStatusById(data, id)
            RenderOrders()
        }

        function cancelStatus(){
            let data = {
                orderStatus: "Canceled"
              }
            updateOrderStatusById(data, id)
            RenderOrders()
        }

            // table colors
        let colorClass = (str) => {
            if (str === "Canceled") {
            return "red";
            } else  if (str === "Confirmed"){
            return "green";
            }
        };
        
        // panaikinti butonus kai uzsakymas patvirtinas arba atsauktas

        let displayNone = (str) => {
            if (str === "Canceled" || str === "Confirmed") {
            return "d-none";
            } 
        };
        
     
  return (
    
    <tr className={colorClass(orderStatus)}>
      <td>{date}</td>
      <td>{id}</td>
      <td>{userName} </td>
      <td>{suma} Eur</td>
      <td>{orderStatus}</td>
      <td>
        <button
          type="button"
          className={orderStatus === "Canceled" || orderStatus === "Confirmed" ? "d-none" : "btn btn-secondary" }
          onClick={() =>cancelStatus()}
        >
          Atšaukti užsakymą
        </button>
      </td>
     
      <td>
        <button type="button" 
        className={orderStatus === "Canceled" || orderStatus === "Confirmed" ? "d-none" : "btn btn-success" }
        onClick={() =>confirmStatus()}   
      >
          Patvirtinti užsakymą
        </button>
      </td>
      <td>
      </td>
      <td></td>
    </tr>
    
  );
}

export default OrdersTable