import React,{useRef,useState} from "react";
import './Schedule.scss';
import axios from "axios";
import { useSelector } from "react-redux";
import 'leaflet/dist/leaflet.css'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import {IoCloseOutline} from 'react-icons/io5'
import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'


const Schedule = ({setSchedpop}) =>{
    const Admins = useSelector((state)=>state.Admin.AllAdmin)
    console.log(Admins);
    const [center,setCenter] = useState([11.127123, 78.656891]);
    const [Select,setSelect] = useState({});
    const [city,setCity] = useState();
    const handleSearch = async (e) =>{
        e.preventDefault();
        try{
            const data = await axios({
                method: 'GET',
                url: `https://api.api-ninjas.com/v1/geocoding?city=${city}`,
                headers: { 'X-Api-Key': 'ul3NP1YwLd//bJie4vvefg==lZHQZpzQD0QLCrYi' },
                responseType: 'json'
              })
              console.log(data.data[0].latitude);
            setCenter([data.data[0].latitude,data.data[0].longitude])  
            console.log(center);
        }
        catch(err){
            console.log(err);
        }
    }

    

    const handleRequest = async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.patch('https://hexago.onrender.com/Admin',{name:'kavin'});
            console.log(response);
        }
        catch(err){
            console.log(err);
        }
    }

    const MapRef = useRef(null);
    return(
        <div className="Schedule">
            <div className="Schedule_contain">
                <div className="Schedule_top">
                    <div className="Schedule_head">
                        <h2>Schedule Verification</h2>
                        <IoCloseOutline size={35} onClick={()=>{setSchedpop(false)}}/>
                    </div>
                    {/* <form onSubmit={handleSearch}>
                        <input type="text" onChange={(e)=>setCity(e.target.value)} placeholder="Search your city"/>
                        <button type="submit">Search</button>
                    </form> */}
                </div>
                <MapContainer center={center} zoom={13} scrollWheelZoom={false} ref={MapRef}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    (Admins).map((Admin)=>
                        <Marker 
                            position={[Admin.lat,Admin.lon]} 
                            icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}
                            onclick={()=>console.log("hi")}
                        >
                            <Popup>
                                <div className="selector">
                                    <h3>
                                        Admin name : {Admin.Username}
                                    </h3>
                                    <h4>Available</h4>
                                    <button onClick={()=>{
                                        setSelect(Admin);
                                        console.log(Select);
                                    }}>Select Admin</button>
                                </div>
                            </Popup>
                        </Marker>
                    )
                }
                </MapContainer>
                <form className="Schedule_bottom" onSubmit={handleRequest}>
                    <h3>Admin : <span>{Select.Username}</span></h3>
                    <div className="Schedule_btn">
                            <button id="Cancel" type="reset" onClick={()=>{setSchedpop(false)}}>Cancel</button>
                            <button type="submit">Request Schedule</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Schedule