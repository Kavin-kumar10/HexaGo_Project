import React, { useState } from "react";
import Header from "../../Components/Header";
import "./Upcomming.scss"
import Box from "../../Components/Box";
import Aside from "./Aside";
import { Navigate } from "react-router-dom";
import Form from "../../Components/Form";
import Counter from "../../Components/Counter";
import { useSelector,useDispatch } from "react-redux";
import { searchRed } from "../../Redux/ProductSlice";


const Upcomming = ({signed,pop,setPop}) =>{
    const ReqProducts = useSelector((state)=>state.Products.ReqProducts);
    const dispatch = useDispatch();
    console.log(ReqProducts);
    // const [products,setProducts] = useState([
    // {
    //     title: 'Bottle of Guardian - (ancient decoration used by britain)',
    //     date: 'AUG 15 2023',
    //     place:'TAMIL NADU',
    //     min:250, 
    //     latest:{
    //         person:'Kiran',
    //         bid:500
    //     }
    // },
    // {
    //     title: 'New title',
    //     date: 'SEP 18 2023',
    //     place:'KERALA',
    //     min:100, 
    //     latest:{
    //         person:'KAVIN',
    //         bid:300
    //     }
    // },
    // ]);

    // if(!signed){
    //     return<Navigate to="/Signup"/>
    // }
    return(
        <div className="Upcomming">
            <Header setPop={setPop}/>
            <div className="gap"></div>
            <div className="Container">
                <Aside/>
                <div className="Home_main">
                   <input type="text" placeholder="Search" onChange={(e)=>{
                        let value = e.target.value;
                        dispatch(searchRed({value}))
                   }}/>
                    <div className="box_container">
                        {
                            ReqProducts.map((elem)=>{
                                // console.log(elem);
                                return(
                                    <Box elem={elem} key={elem.title}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upcomming