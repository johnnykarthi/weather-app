
import { useState,useEffect } from 'react';
import Weather from './Weather';


export default function Home({latitude,longitude}) {
  const [weatdata,setWeathdata] = useState();
  useEffect(()=>{
    const getweatherdata = async()=>{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=464cd2d278cd1f21bac6e7262e4f47d4&units=metric`);
        const jsondata = await response.json();
        setWeathdata(jsondata);
    }
    getweatherdata();
  },[latitude,longitude])
  
  return (
    <>
      {weatdata && <Weather data={weatdata}/>}
    </>
    
  )
}
