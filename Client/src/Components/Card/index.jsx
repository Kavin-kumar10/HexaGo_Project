import React from "react";
import {FaBookmark} from 'react-icons/fa'
import "./Card.scss"

const Card = () =>{
    return(
        <div className="Card">
            <div className="img">
                <p>latest bid $250</p>
            </div>
            <div className="Card_desc">
                <h3>Bottle of Guardian - (Ancient decoration used by britain)</h3>
            </div>
            <div className="Card_btn">
                <button id="Preview">Preview Auction</button>
                <button><FaBookmark color="var(--tertiary-color)"/></button>
            </div>
        </div>
    )
}

export default Card;