import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getProducts } from "../../Redux/ProductSlice";
import AdminCard from "./AdminCard";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Admin.scss"

const Admin =  ({adminSign}) =>{
    const products = useSelector((state)=>state.Products.AllProducts)
    const dispatch = useDispatch();
    const [select,setSelect] = useState("inbox");


    if(!adminSign){
        return<Navigate to="/Signup"/>
    }
    return(
        <div className="Admin">
            <div className="Admin_head">
                <div className="logo">
                    <h1>Hexa<span>Go</span></h1>
                </div>
                <ul>
                    <li onClick={()=>{setSelect("inbox")}}>Inbox</li>
                    <li onClick={()=>{setSelect("Accepted")}}>Accepted</li>
                    <li onClick={()=>{setSelect("Rejected")}}>Rejected</li>
                    <li id="profile">{JSON.parse(localStorage.getItem('user')).Username}</li>
                </ul>
            </div>
            <div className="Admin_topic">
                <h1>Inbox - ( Pending Request )</h1>
                <div className="top_line"></div>
            </div>
            <div className="AdminContainer">
                {
                    products.map((elem)=>{
                        if(elem.status == -1 && select == "inbox"){
                            return(
                                <AdminCard elem={elem}/>
                            )
                        }
                        else if(elem.status == 1 && select == "Accepted"){
                            return(
                                <AdminCard elem={elem}/>
                            )
                        }
                        else if(elem.status == 0 && select == "Rejected"){
                            return(
                                <AdminCard elem={elem}/>
                            )
                        }
                    }
                    )
                }
            </div>
        </div>
    )
}

export default Admin