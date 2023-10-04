import React, { useEffect, useState } from 'react'
import WeatherDatas from './WeatherDatas';

export default function WeatherTest() {

  const [latlog,setLatlog] = useState({
    latitude:0,
    longitude:0
  });
  useEffect(()=>{
    const latlogfn = async()=>{
       const response = await fetch('https://ipapi.co/json/');
       const json = await response.json();
       setLatlog({
        latitude:json.longitude,
        longitude:json.longitude
       })
    }
    latlogfn();
  },[])
  return (
    <WeatherDatas latitude={latlog.latitude} longitude={latlog.longitude}/>
  )
}
