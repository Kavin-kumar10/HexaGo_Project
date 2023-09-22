import React from "react";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
import { getProducts } from "../../../Redux/ProductSlice";
import "./AdminCard.scss"

const AdminCard = ({elem}) =>{
    const products = useSelector((state)=>state.Products.AllProducts)
    const dispatch = useDispatch();

    const handleApprove = async(elem) =>{
        try{
            console.log(`https://hexago.onrender.com/Products/Accept/${elem._id}`);
            const response = await axios.put(`https://hexago.onrender.com/Products/Accept/${elem._id}`);
            dispatch(getProducts());
            console.log(response);
        }
        catch(err){
            console.log(err);
        }
    }

    const handleReject = async(elem) =>{
        try{
            console.log(`https://hexago.onrender.com/Products/Decline/${elem._id}`);
            const response = await axios.put(`https://hexago.onrender.com/Products/Decline/${elem._id}`);
            dispatch(getProducts());
            console.log(response);
        }
        catch(err){
            console.log(err);
        }
    }

    return(
        <div className="AdminCard">
            <div className="AdminCard_top">
                <img src={elem.img_url} alt="img" />
                <div style={{width:"50%"}}>
                    <h2>{elem.title}</h2>
                    <p>{elem.endDate}</p>
                </div>
            </div>
            {
                (elem.status == -1)?
                <div className="AdminCard_bottom">
                    <button id="Preview">Preview</button>
                    <div className="status">
                        <button id="Accept" onClick={()=>handleApprove(elem)}>Accept</button>
                        <button id="Reject">Reject</button>
                    </div>
                </div>
                :(elem.status == 0)?
                <div className="AdminCard_bottom">
                <div className="status">
                    <button id="Accept">Emergency Accept</button>
                    <button id="Preview" style={{margin:"0px 10px"}}>Preview</button>
                </div>
                </div>
                :
                <div className="AdminCard_bottom">
                    <div className="status">
                        <button id="Reject">Emergency Reject</button>
                        <button style={{margin:"0px 10px"}} id="Preview">Preview</button>
                    </div>
                </div>
            }
            {/* <button onClick={()=>handleApprove(elem)}>Accept</button>
            <button>Preview</button>
            <button onClick={()=>handleReject(elem)}>Decline</button> */}
        </div>
    )
}

export default AdminCard