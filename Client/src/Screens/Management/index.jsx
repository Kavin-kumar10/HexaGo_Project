import React,{ useState } from "react";
import {AiOutlineUser} from 'react-icons/ai'
import { useSelector,useDispatch } from "react-redux";
import "./Management.scss"
import axios from "axios";

const Management = () =>{
    const Admins = useSelector((state)=>state.Admin.AllAdmin);
    const getUsers = async() =>{
        try{
            const Response = await axios.get('https://hexago.onrender.com//Auth');
            console.log(Response.data);
        }
        catch(err){
            console.log(err);
        }
    }
    // getUsers();
    // const [Members,setMembers] = useState('Admin');
    return(
        <div className="Management">
            <div className="Top">
                <h1>Hexa<span>Go</span></h1>
                <p>Management <span>Dashboard</span></p>
            </div>
            <div className="selectors">
                <div className="selector">
                    <AiOutlineUser id="icon"/>
                    <h2>Admin - 20</h2>
                </div>
                <div className="selector">
                    <AiOutlineUser id="icon"/>
                    <h2>Users - 120</h2>
                </div>
            </div>
            <div className="Members">
                {
                    Admins?.map((Admin)=>
                        <div className="Member">
                            <h3>{Admin.Username}</h3>
                            <h4>{Admin.email}</h4>
                            
                        </div>   
                    )
                }
            </div>
        </div>
    )
}

export default Management