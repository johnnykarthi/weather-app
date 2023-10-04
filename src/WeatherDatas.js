import React, { useEffect, useState } from 'react'

export default function WeatherDatas({latitude,longitude}) {
  const [weatdata,setWeathdata] = useState();

  useEffect(()=>{
    const getweatherdata = async()=>{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=464cd2d278cd1f21bac6e7262e4f47d4&units=metric`);
        const jsondata = await response.json();
        setWeathdata(jsondata);
    }
    getweatherdata();
  },[latitude,longitude])
  console.log(weatdata);
  return (
    <>
    <div>Latitude:{latitude} <br/>
    Longitude:{longitude}</div>
    <div>
        Weather:{weatdata && weatdata.weather[0].main}
    </div>
    </>
    
  )
}
