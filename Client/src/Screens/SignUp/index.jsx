import React,{useEffect, useState} from "react";
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import "./SignUp.scss"

const SignUp = ({setSigned}) =>{
    const navigate = useNavigate();
    // const [users,setUsers] = useState([]);
    const [user,setUser] =  useState({
        Username : '',
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
            const response = await axios.post('https://hexago.onrender.com/Auth/SignUp',user);
            console.log(response);
            if(response.data.success == true){
                setSigned(true);
                localStorage.setItem('user',JSON.stringify(user));
                    setTimeout(()=>{
                            navigate('/');
                    },1000);
                }
                else{
                    alert("Already found");
                }
             
            }
            catch(err){
                console.log(err);
            }
        }

    return(
        <div className="SignUp">
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
                <form onSubmit={(e)=>handleSubmit(e)} action="/">
                    <div className="Data_entry">
                        <label htmlFor="UserName">Username:</label>
                        <input type="text" id="UserName" name="Username" required value={user.Username} onChange={(e)=>handleChange(e)}/>
                        <div className="line"></div>
                    </div>
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
                    <div className="agree">
                        <input type="checkbox" required/>
                        <p>I agree to all policy</p>
                    </div>
                    <button type="submit" >SignUp</button>
                    <p>Already have an account <span><Link to="/SignIn">SignIn</Link></span></p>
                </form>
            </div>
        </div>
    )
}

export default SignUp