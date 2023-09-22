import React,{useState,useEffect} from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getProducts } from "../../Redux/ProductSlice";
import "./Counter.scss"


const Counter = ({elem,date}) =>{
  const dispatch = useDispatch();
    const eventDate = new Date(date); // Replace with your event date and time
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const updateCountdown = async() => {
    const currentTime = new Date();
    const timeDifference = eventDate - currentTime;
    if (timeDifference == 0 || timeDifference < 1000) {
      try{       
          const response = await axios.patch(`https://hexago.onrender.com/Products/BidUpdate/${elem._id}`,{finalBid:elem.latestBid,status:10}) 
          console.log(response);
          dispatch(getProducts);
      }
      catch(err){
          console.log(err);
      }
  }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  useEffect(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
    return(
        <div className="countdown">
        <div className="countdown-item">
          <span className="number">{formatTime(days)}</span>
          <span className="label"> Days</span>
        </div>
        <div className="countdown-item">
          <span className="number">{formatTime(hours)}</span>
          <span className="label"> Hour</span>
        </div>
        <div className="countdown-item">
          <span className="number">{formatTime(minutes)}</span>
          <span className="label"> Min</span>
        </div>
        <div className="countdown-item">
          <span className="number">{formatTime(seconds)}</span>
          <span className="label"> Sec</span>
        </div>
      </div>
    )
}

export default Counter