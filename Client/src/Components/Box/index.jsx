import React, { useState } from "react";
import { Link } from "react-router-dom";
import { product } from "../../Assets";
import Counter from "../Counter";
import axios from "axios";
import "./Box.scss"

const Box = ({elem}) =>{
    return(
        <div className="Box">
            <div className="img">
                <img src={elem.img_url} alt="img" />
                {/* <img src="https://5.imimg.com/data5/TW/ML/KK/SELLER-9406150/hanging-item.jpg" alt="img" /> */}
            </div>
            <div className="content">
                {
                    (elem.status == 1)?
                    <div className="live">
                        <div className="dot"></div>
                        <p>live</p>
                    </div>
                    :null
                }
                <div className="mid">
                    <h1>{elem.title}</h1>
                    <h2>{elem.endDate} - {elem.location}</h2>
                </div>
                {
                    (new Date(elem.endDate) - new Date() > 0)?
                    <div className="bot">
                        <p>Ends in : <Counter elem={elem} date={elem.endDate}/></p>
                    </div>:null
                }
            </div>
            <div className="btn">
                {
                    (elem.status == 1)?
                    <Link to={`/Product/${elem._id}`}>
                        <button>REGISTER</button>
                    </Link>:(elem.status == 10)?
                    <button disabled style={{background:"green"}}>Completed</button>:
                    <button disabled style={{opacity:0.5}}>Pending</button>
                }
                   <p>Minimum Estimate: ${elem.minimum}</p>
            </div>
        </div>
    )
}

export default Box