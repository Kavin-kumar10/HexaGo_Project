import React, { useState } from 'react'
import "./Myproducts.scss"
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../../Components/Header'
import Schedule from '../../Components/Schedule'
import { searchRed } from '../../Redux/ProductSlice'

const Myproducts = ({setPop}) =>{

    //handle pop
    const [schedpop,setSchedpop] = useState(false);

    const AllProducts = useSelector((state)=>state.Products.AllProducts);
    const products = AllProducts.filter((elem)=>elem.username == JSON.parse(localStorage.getItem('user')).Username)
    const dispatch = useDispatch();
    console.log(JSON.parse(localStorage.getItem('user')).Username);

    
    return(
        <div className="Myproducts">
            <Header setPop={setPop}/>
            {
                (schedpop)?
                <Schedule setSchedpop={setSchedpop}/>:
                null
            }
            <div className="Myproducts_top">
                <h1>My Products</h1>
                <div className="line"></div>
            </div>
            <div className="MyCardContainer">
                {
                    (products)?.map((elem)=>{
                        let mydate = new Date(elem.endDate);
                        let reqDate = mydate.toLocaleDateString();
                        return(
                            <div className="MyCard">
                                <div className="box_row">
                                    <img src={elem.img_url} alt="img" />
                                    <div className="box_col">
                                        <h3>{elem.title}</h3>
                                        <h5>{reqDate}</h5>
                                    </div>
                                </div>
                                {
                                    (elem.status == -1)?<span id='pend' onClick={()=>setSchedpop(true)}>Schedule Now</span>:(elem.status == 1)?<span id='app'>Approved</span>:(elem.status == 10)?<span id='Com'>Auction Completed</span>:<span id='rej'>Rejected</span>
                                }
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}

export default Myproducts