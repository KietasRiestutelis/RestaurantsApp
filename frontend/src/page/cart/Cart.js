import React, { useState, useEffect } from "react";
import {getUserById} from "../../api/libraries/userCartLibraries"
import { useParams } from "react-router-dom";
import CartTable from "./CartTable";
import {deleteUserCartItem, findUserCartItemAndUpdate, changeCartItemStatus} from "../../api/libraries/userCartLibraries";
import {createUserOrder} from "../../api/libraries/orderLibraries";


function Cart() {
    const [userCart, setUserCart] = useState ([]);
    const [id, setId] = useState ([]);
    const [isLoading, setIsLoading] = useState(false);
    const [sum, setSum] = useState(0)
    const [total, setTotal] = useState(0)
    const [userName, setUserName] = useState([])
    const [userId, setUserId] = useState("")
    
    
    
    useEffect(() => {
        Render()
        Render()
        
    }, []);

     function Render() {
        getUserById().then ((res) => {
          setUserCart(res.data.data.users.cart);
          setId(res.data.data.users._id)
          setUserName(res.data.data.users.username)
          setUserId(res.data.data.users._id)
          
        })
        
    }

    function deleteItem(id, subId){
        deleteUserCartItem(id, subId)
        Render()
    }

    

    var suma = 0
    userCart.forEach((item) => {
      suma += item.unit * item.price
       
    })

    function addOrder(suma, userId,userName, userCart){
      // console.log(userCart);
      createUserOrder(suma, userId, userName, userCart)

     
    }

   
  
      const cartItem = userCart.map((item)=>{
        return(
            <CartTable
                key={item._id}
                unit={item.unit}
                price={item.price}
                foodName={item.foodName}
                restaurantName={item.restaurantName}
                subId={item._id}
                id={id}
                Render={Render}
                deleteItem={deleteItem}
                setTotal={setTotal}
                total={total}
              
                
                
                />
        )
      })

      

  return (
    <>
    <div className="container">
      <table className="table">
      <thead>
        <tr>
          <th>Restoranas</th>
          <th>Patiekalo pavadinimas</th>
          <th>Kaina</th>
          <th></th>
          <th>Kiekis</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>{cartItem}</tbody>
      </table>

      <h4> Suma iš viso: {suma} Eur</h4>
      <button className="btn btn-warning " onClick={() =>addOrder({suma, userId, userName, userCart })}>Atlikti užsakymą </button>
      <hr></hr>
      <h3>Užsakymų istorija:</h3>
      </div>
      </>
  )
}

export default Cart