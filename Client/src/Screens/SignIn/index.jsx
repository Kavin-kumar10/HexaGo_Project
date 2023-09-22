import React,{useState} from "react";
import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'
import "./SignIn.scss"

const SignIn = ({setSigned,setAdminSign}) =>{
    const navigate = useNavigate();
    const [Role,setRole] = useState("");
    const [user,setUser] =  useState({
        email:'',
        password:''
    });


    const handleChange = (e) =>{
        const { name, value } = e.target;
        setUser((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            if(Role == "User"){
                const response = await axios.post('https://hexago.onrender.com/Auth/SignIn',user);
                console.log(response);
                if(response.data.success == true){
                    navigate('/');
                    setSigned(true);
                    localStorage.setItem('user',JSON.stringify(response.data.data));
                }
                else{
                    alert("Account not found try signUp");
                }
            }
            else if(Role == "Admin"){
                const response = await axios.post('https://hexago.onrender.com/Admin/SignIn',user);
                console.log(response);
                if(response.data.success == true){
                    console.log("entered");
                    navigate('/Admin');
                    setAdminSign(true);
                    localStorage.setItem('user',JSON.stringify(response.data.data));
                }
                else{
                    alert("Account not found try signUp");
                }
            }
        }
        catch(err){
            console.log(err);
        }
        // const localData = JSON.parse(sessionStorage.getItem('Users'));
        // localData.filter((elem)=>{
        //     (elem.email == user.email && elem.password == user.password)?
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'User Not found',
        //         // text: 'User Not Found',
        //         // footer: '<a href="">Why do I have this issue?</a>'
        //     })
        // })
    }

    return(
        <div className="SignIn">
            <div className="poster">
                <div className="poster_contain">
                    <h1>Hexa<span>Go</span></h1>
                    <p>Auction platform</p>
                </div>
            </div>
            <div className="SignForm">
                <div className="heading">
                    <h1>Kickstart your business here</h1>
                    <h4>We help you make your life fruitful</h4>
                </div>
                <form onSubmit={handleSubmit} action="/">
                    <div className="Data_entry">
                        <label htmlFor="Email">Email:</label>
                        <input type="email" id="Email" name="email" required value={user.email} onChange={(e)=>handleChange(e)}/>
                        <div className="line"></div>
                    </div>
                    <div className="Data_entry">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required value={user.password} onChange={(e)=>handleChange(e)}/>
                        <div className="line"></div>
                    </div>
                    <div className="Data_entry">
                    <label htmlFor="role">Role:</label>
                        <select name="Role" value={Role} id="Role" required onChange={(e)=>{
                            setRole(e.target.value);
                        }}>
                            <option value="">Select Role</option>
                            <option value="Admin">Admin</option>
                            <option value="User">User</option>
                            <option value="Manager">Manager</option>
                        </select>
                    </div>
                    <div className="agree">
                        <input type="checkbox"/>
                        <p>I agree to all policy</p>
                    </div>
                    <button type="submit" >SignIn</button>
                    <p>Create New Account <span><Link to="/Signup">SignUp</Link></span></p>
                </form>
            </div>
        </div>
    )
}

export default SignIn