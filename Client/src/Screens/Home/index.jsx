import React from "react";
import Header from "../../Components/Header";
import "./Home.scss"
import Carousel_comp from "../../Components/Carousel_comp";
import Card from "../../Components/Card";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { bg } from "../../Assets";

const Home = ({signed,setPop}) =>{
    const ReqProducts = useSelector((state)=>state.Products.ReqProducts);
    const dispatch = useDispatch();
    console.log(ReqProducts);
    // if(!signed){
    //     return<Navigate to="/Signup"/>
    // }
    return(
        <div className="Home">
            <Header setPop={setPop}/>
            <div className="banner">
                <h1>Hexa<span>Go</span></h1>
                <p>Kickstart your career with No. 01 <span>Auction platform</span></p>
                <div className="btns">
                    <button onClick={()=>{setPop(true)}}>Be a Seller</button>
                    <button><Link style={{color:"black",textDecoration:"none"}} to="/Upcomming">Getting Started!</Link></button>
                </div>
            </div>
            <Carousel_comp/>
            <div className="Trending">
                <h1>Trending Auction</h1>
                <div className="line"></div>
                <div className="Card_container">
                    {
                        (ReqProducts)?.map((elem)=>
                            <Card/>
                        )
                    }
            
                </div>
                <div className="seller" style={{background:`url(${bg})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                    <div className="layer">
                        <div className="layer_top">
                            <h1>Let's grow together with HexaGo</h1>
                            <div className="layer_line"></div>
                        </div>
                        <div className="layer_bot">
                            <p>Send your product details to us and get verified</p>
                            <button>Start Selling</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home