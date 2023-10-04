import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Welcome from './components/Welcome';
function App() {
    const [latlog,setlatlog] = useState({
      lat:0,
      log:0
    });  
    const fncall = ()=>{
      if(navigator.geolocation) {
         navigator.geolocation.getCurrentPosition((data) => {
          setlatlog({
            lat:data.coords.latitude,
            log:data.coords.longitude
          })
        }
        )
      }
    }
    useEffect(()=>{
      fncall()
    },[]);
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Welcome/>}></Route>
      <Route path='/weather' element={<Home latitude={latlog.lat} longitude={latlog.log}/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
