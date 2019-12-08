import React from "react";
import "../App.css";

const Card = props => {
    return (
        <div className="sportlogos-subcontainer">
            <h3>{props.country}</h3>
            <img
                alt={props.name}
                src={props.img}
                onClick={() => props.clickedCard(props.id)}
                className="images"
            />
        </div>
    );
}
              
export default Card;