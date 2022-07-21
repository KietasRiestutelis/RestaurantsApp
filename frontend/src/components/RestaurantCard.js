import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getRestaurantById } from "../api/libraries/apiLibraries";

function RestaurantCard({
    name,
    about,
    address,
    city,
    meniu,
    email,
    phoneNumber,
    website,
    id,
}) {
    let navigate = useNavigate();
    let { restorauntName } = useParams();
    
    return (
        <div className="col-md-3 text-center m-2">
            <div className="card border-warning" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                            <p className="card-text">{about}</p>
                            <footer className="footer">{address}</footer>
                            <Link to={`/restaurant/${id}`}>
                            <a href="#" className="btn btn-warning">Eiti į restoraną</a>
                            </Link>
                    </div>
            </div>
        </div>
    );
}

export default RestaurantCard;



