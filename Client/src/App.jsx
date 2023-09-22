import React from 'react';
import './App.scss';
import Upcomming from './Screens/Upcomming';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Desc from './Screens/Desc';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import Home from './Screens/Home';
import Admin from './Screens/Admin';
import Management from './Screens/Management';
import { useEffect, useState } from 'react';
import Form from './Components/Form';
import { useDispatch,useSelector } from 'react-redux';
import { getProducts } from './Redux/ProductSlice';
import { getAdmin } from './Redux/Adminslice';
import Myproducts from './Screens/Myproducts';
import Header from './Components/Header';

function App(){

  //declarations
  const dispatch = useDispatch();
  const [signed,setSigned] = useState(false);
  const [adminSign,setAdminSign] = useState(false);
 
  useEffect(()=>{
      if(!JSON.parse(localStorage.getItem('user'))){
        localStorage.setItem('user',JSON.stringify({Username:''}))
        setSigned(false);
      }
      else{
        console.log(localStorage.getItem('user'));
        setSigned(true);
      }
  },[])
  
  //axios call on every dispatch
  useEffect(()=>{
    dispatch(getProducts());
    dispatch(getAdmin());
  },[dispatch])
  

  const [pop,setPop] = useState(false);

  return(
    <Router>
      <div className="App">
        {
          pop?
          <Form setPop={setPop}/>:null
        }
        <Routes>
            <Route path='/SignUp' element={<SignUp setSigned={setSigned} />}/>
            <Route path='/SignIn' element={<SignIn setSigned={setSigned} setAdminSign={setAdminSign}/>}/>
            <Route path='/' element={<Home signed={signed} pop={pop} setPop={setPop}/>} />
            <Route path='/Admin' element={<Admin adminSign={adminSign}/>}/>
            <Route  path='/Upcomming' element={<Upcomming signed={signed} pop={pop} setPop={setPop}/>}/>
            <Route path='/Myproducts' element={<Myproducts setPop={setPop}/>}/>
            <Route path='/Management' element={<Management/>}/>
            <Route path='/Product/:id' element={<Desc signed={signed} pop={pop}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
