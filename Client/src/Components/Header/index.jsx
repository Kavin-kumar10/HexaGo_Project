import React from "react";
import "./Header.scss";
import { logo } from "../../Assets";
import { Link } from "react-router-dom";

const Header = ({setPop}) =>{

    return(
        <div className="Header">
            <div className="logo">
                <h1>Hexa<span>Go</span></h1>
                {/* <img src={logo} alt="logo" /> */}
            </div>
            <ul>
                <Link to="/" style={{textDecoration:'none'}}>
                    <li>Auction live</li>
                </Link>
                <Link to="/Upcomming" style={{textDecoration:"none"}}>
                    <li>Upcomming auctions</li>
                </Link>
                <Link to="/Myproducts" style={{textDecoration:"none"}}>
                    <li>My Products</li>
                </Link>
                <li onClick={()=>{setPop(true)}}>Sell</li>
                {/* <li>Chat</li> */}
                <li id="profile">{JSON.parse(localStorage.getItem('user')).Username}</li>
            </ul>
        </div>
    )
}

export default Header