import React,  { useState, useContext} from 'react';
import { Card, Button } from "react-bootstrap";
import {createUserCartItem} from "../../src/api/libraries/userCartLibraries";

function MeniuCard({ foodName, price, aboutFood, foodId, category, restaurantName }) {
  const [cart, setCart] = useState ([])
  const [status, setStatus] = useState ("waiting")

  return (
    <div>
      <Card>
        <Card.Header>{category}</Card.Header>
        <Card.Body>
          <Card.Title>{foodName}</Card.Title>
          <Card.Text>
           {aboutFood}
          </Card.Text>
          <Card.Text>
           {price} Eur
          </Card.Text>
          <Button onClick={() => createUserCartItem({price, foodName, restaurantName, status })} variant="warning">Pridėti į krepšelį</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MeniuCard;
