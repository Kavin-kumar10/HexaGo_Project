import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch,useSelector } from "react-redux";
import { getProducts } from "../../Redux/ProductSlice";
import { Navigate } from "react-router-dom";
import Swal from 'sweetalert2'
import 'react-toastify/dist/ReactToastify.css';
import Form from "../../Components/Form";
import {
    LinkedinShareButton,
    LinkedinIcon,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappIcon,
    WhatsappShareButton,
  } from "react-share";
import "./Desc.scss"
import axios from "axios";

const Desc = ({setPop,signed}) =>{
    const dispatch = useDispatch();
    const [bid,setBid] = useState(0);

    //Data 
    const AllProducts = useSelector((state)=>state.Products.AllProducts);
    console.log(AllProducts);
    const param = useParams();
    const [Elem,setElem] = useState();
    let item = AllProducts?.find(item => item._id == param.id);
    console.log(item);
    useEffect(()=>{
        setElem(item);
    })

    //Bid handle
    const handleBid = (e) =>{
        e.preventDefault();
        if(JSON.parse(Elem.minimum)>bid || Elem.latestBid>bid){
            toast.error('Bidding value must be greater than the bid', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        else{
            Swal.fire({
                title: 'Are you sure you wanna bid?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, accept Bid!'
              }).then(async(result) => {
                if (result.isConfirmed) {
                    try{       
                        const response = await axios.patch(`https://hexago.onrender.com/Products/BidUpdate/${Elem._id}`,{latestBid:bid,latestMem:JSON.parse(localStorage.getItem('user')).Username}) 
                        console.log(response);
                        dispatch(getProducts);
                        Swal.fire(
                            'Bidding Successful!',
                            'You are the top candidate now!!!',
                            'success'
                        )
                    }
                    catch(err){
                        console.log(err);
                    }
                }
              })
        }
    }

    if(!signed){
        return<Navigate to="/Signup"/>
    }

    return(
        (!Elem)?null:
        <div className="Desc">
            <Header setPop={setPop}/>

            <div className="Container">
                <div className="img" style={{background:`url(${Elem.img_url})`,backgroundRepeat:'no-repeat',backgroundPosition:"center",backgroundSize:"cover"}}>
                    {/* <img src="https://5.imimg.com/data5/TW/ML/KK/SELLER-9406150/hanging-item.jpg" alt="img" /> */}
                </div>
                <div className="description">
                    <div className="live">
                        <div className="dot"></div>
                        <p>live</p>
                    </div>
                    <h1>{Elem.title}</h1>
                    <div className="detail">
                        <p>SELLER : {Elem.username} </p>
                        <p>DURATION: AUG 1 2023 -  AUG 15 2023</p>
                        <p>LOCATION : {Elem.location}</p>
                        <p>STARTING BID: ${Elem.minimum}</p>
                    </div>
                    <div className="Share">
                    <WhatsappShareButton id="media" url={`http://localhost:3000/Product/${Elem._id}`}>
                        <WhatsappIcon size={35} round={true} />
                    </WhatsappShareButton>
                    <LinkedinShareButton id="media" url={`http://localhost:3000/Product/${Elem._id}`}>
                        <LinkedinIcon size={35} round={true} />
                    </LinkedinShareButton>
                    <TelegramShareButton id="media" url={`http://localhost:3000/Product/${Elem._id}`}>
                        <TelegramIcon size={35} round={true} />
                    </TelegramShareButton>                 
                    <TwitterShareButton id="media" url={`http://localhost:3000/Product/${Elem._id}`}>
                        <TwitterIcon size={35} round={true} />
                    </TwitterShareButton>

                    </div>
                    <div className="describe">
                        <h3>Description</h3><br />
                        <p>{Elem.description}</p>
                    </div>
                    <div className="latest">
                        <h2>Latest bid : ${Elem.latestBid} &nbsp;<span>by {Elem.latestMem}</span></h2>
                        <br />
                        <div className="latest_btn">
                            <form onSubmit={(e)=>{handleBid(e)}}>
                                <input type="number" value={bid} onChange={(e)=>setBid(e.target.value)}/>
                                <button>Bid Now</button>
                            </form>
                             <p>Must be greater <br /> than latest bid</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Desc