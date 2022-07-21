import React, { useState, useEffect } from "react";
import { deleteUserCartItem,  findUserCartItemAndUpdate } from "../../api/libraries/userCartLibraries";

function CartTable({
  unit,
  price,
  foodName,
  restaurantName,
  subId,
  id,
  deleteItem,
  Render,
  total,
  setTotal,
  
  
}) 
    {
      
      const [quantity, setQuantity] = useState(unit);
      const [suma, setSuma] = useState(0)
     
      
      
      // add one item unit
      function addItem(){
        setQuantity((quantity+1));
    
        let data = {
          unit: (quantity + 1)
        }
  
        findUserCartItemAndUpdate(data, id, subId)

        // renderinam kad atsinaujintu krepselio item kiekis
        Render()
      }
      
      //reduce one item unit
      function reduceItem(){
        if(quantity  > 1 ){
        setQuantity((quantity-1));
    
        let data = {
          unit: (quantity - 1)
        }
        findUserCartItemAndUpdate(data, id, subId)
      }
        Render()
      }

     

  return (
    <tr>
      <td>{restaurantName}</td>
      <td>{foodName}</td>
      <td>{price} Eur</td>
      <td>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() =>reduceItem()}
        >
          -
        </button>
      </td>
      <td> {unit}</td>
      <td>
        <button type="button" className="btn btn-success" onClick={() =>addItem()}   
      >
          +
        </button>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteItem(id, subId)}
        >
          Ištrinti
        </button>
      </td>
      <td></td>
    </tr>
  );
}

export default CartTable;
