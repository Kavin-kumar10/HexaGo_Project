import React,{useState,useRef, useEffect} from "react";
import "./Form.scss";
import {RxCross1} from 'react-icons/rx'
import { useSelector,useDispatch } from "react-redux";
import { updateFormField } from "../../Redux/ProductSlice";
import Swal from 'sweetalert2'
import axios from 'axios'


const Form = ({setPop}) =>{

    const product = useSelector((state) => state.Products.Product)
    const [Image,setImage] = useState();
    const [uploaded,setUploaded] = useState();
    const dispatch = useDispatch();
    const [selectedImage, setSelectedImage] = useState(null);
    const imageRef = useRef(null);
    console.log(product);

    const handleFieldChange = (e) =>{
        const {name,value} = e.target;
        dispatch(updateFormField({name,value}))
    }

    const handleImageSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
          const imageUrl = URL.createObjectURL(file);
          setSelectedImage(imageUrl);
        //   if (imageRef.current) {
        //     const backgroundColor = 'lightblue'; // Change this to your desired background color
        //     imageRef.current.style.background = backgroundColor;
        //   }
        }
    };

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const imageData = new FormData();
        imageData.append('image',Image);
        console.log(product);
        await axios.post('https://hexago.onrender.com/uploads',imageData)
        .then((res)=>{
            console.log(res);
            let name = 'img_url'
            let value = res.data;
            dispatch(updateFormField({name,value}));
            setUploaded(true);
        })
        .catch((err)=>{
            console.log(err.response.data);
        })
    }
    useEffect(()=>{
        if(uploaded){
            axios.post('https://hexago.onrender.com/Products',product)
            .then((res)=>{
                console.log(res);
                Swal.fire(
                    'You added new product!',
                    'Please refresh the page',
                    'success'
                )
                setPop(false);
                setUploaded(false);
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    },[uploaded])

    return(
        <div className="Form">
            <div className="Form_Contain">
                <div className="Form_head">
                    <h1>Sell Your Product</h1>
                    <RxCross1 size={30} onClick={()=>setPop(false)} id="icon"/>
                </div>
                <form onSubmit={(e)=>handleSubmit(e)} enctype="multipart/form-data">
                    <div className="form_left">
                        <div className="form_elem">
                            <label htmlFor="Origin">Country of Origin:</label>
                            <input type="text" id="Origin" name="origin" onChange={handleFieldChange}/>
                        </div>
                        <div className="form_elem">
                            <label htmlFor="Title">Title of the Product:</label>
                            <input type="text" id="Title" name="title" onChange={handleFieldChange}/>
                        </div>
                        <div className="form_elem">
                            <label htmlFor="Description">Description:</label>
                            <textarea type="text" id="Description" name="description" onChange={handleFieldChange}/>
                        </div>
                        <div className="form_elem">
                            <label htmlFor="Minimum">Minimum Estimate:</label>
                            <input type="Number" id="Minimum" name="minimum" onChange={handleFieldChange}/>
                        </div>
                        <div className="form_elem">
                            <label htmlFor="Seller Mail">Seller Mail:</label>
                            <input type="email" id="Seller Mail" name="sellerMail" onChange={handleFieldChange}/>
                        </div>
                        <div className="form_elem">
                            <label htmlFor="End Date">End Date:</label>
                            <input type="datetime-local" id="End Date" name="endDate" onChange={handleFieldChange}/>
                        </div>
                        <div className="form_elem">
                            <label htmlFor="Period">Period (in years):</label>
                            <input type="text" id="Period" name="period" onChange={handleFieldChange}/>
                        </div>
                        {/* <label htmlFor="Picture" useRef={imageRef}
                                style={{
                                    backgroundImage: selectedImage ? `url(${selectedImage})` : 'none',
                                    backgroundSize: 'cover',
                                    border: '1px solid black',
                                  }}
                        >
                        </label> */}
                    </div>
                    <div className="form_right">
                        <div className="form_elem">
                            <label htmlFor="Material">Material:</label>
                            <input type="text" id="Material" name="material" onChange={handleFieldChange}/>
                        </div>
                        <div className="form_elem">
                            <label htmlFor="Damage">Damage:</label>
                            <input type="text" id="Damage" placeholder="Yes/No" name="damage" onChange={handleFieldChange}/>
                        </div>
                        <div className="form_elem">
                            <label htmlFor="Location">Location:</label>
                            <input type="text" id="Location" name="location" onChange={handleFieldChange}/>
                        </div>
                        <div className="form_elem">
                            <label htmlFor="Additional">Additional :</label>
                            <textarea type="text" id="Additional" name="additional" onChange={handleFieldChange}/>
                        </div>
                        <div className="form_elem">
                            <label htmlFor="Proof">Proof:</label>
                            <input type="file" id="Proof" name="proof" onChange={handleFieldChange}/>
                        </div>
                        <div className="form_elem">                          
                            <label htmlFor="Picture" className="Picture">
                                SELECT IMAGE
                            </label>
                            <input onChange={(e)=>{
                                // handleFieldChange();
                                setImage(e.target.files[0]);
                                console.log(Image);
                                // handleImageSelect();
                            }} type="file" id="Picture" style={{display:"none"}} name="image"/>
                        </div>
                        
                        <div className="form_btn">
                            <button type="submit">Send Request</button>
                            <button>Cancel</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form