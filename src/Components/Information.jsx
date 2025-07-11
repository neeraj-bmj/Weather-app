import React, { useState } from 'react'

const Information = ({weatherInformation}) => {

  // const [weatherInformation, setWeatherInformation] = useState({
  //   country : "IN",
  //   feels_like : 35.29,
  //   humidity: 27,
  //   name: "Delhi",
  //   temp: 35.88,
  //   temp_max: 35.88,
  //   temp_min: 35.88,
  //   weather: "clear sky",
  //   pressure: 1006,
  //   speed: 3.35
  // });
  
let hot_url = <i className="ri-sun-fill"></i>
let cold_url = <i className="ri-snowflake-fill"></i>
let rain_url = <i className="ri-thunderstorms-fill"></i>

    
  return (
    <>
    <div className="informationCard flex flex-col gap-4 bg-gray-700 w-sm rounded-lg py-5 px-10 mb-7">
      <div className="cityName text-zinc-200 text-2xl font-semibold">
        {weatherInformation.name}, {weatherInformation.country}
        {weatherInformation.humidity > 40 ? rain_url : weatherInformation.temp > 20 ? hot_url : cold_url   }
      </div>

     <div className="containerInformation flex flex-col">
       <div className='font-semibold text-zinc-300 text-lg'>City : {weatherInformation.name}</div>
       <div className='font-semibold text-zinc-300 text-lg'>Feels_like : {weatherInformation.feels_like}</div>
       <div className='font-semibold text-zinc-300 text-lg'>Humidity : {weatherInformation.humidity}%</div>
       <div className='font-semibold text-zinc-300 text-lg'>Weather : {weatherInformation.weather}</div>
       <div className='font-semibold text-zinc-300 text-lg'>Temp : {weatherInformation.temp}&deg;C</div>
       <div className='font-semibold text-zinc-300 text-lg'>Temp_max : {weatherInformation.temp_max}&deg;C</div>
       <div className='font-semibold text-zinc-300 text-lg'>Temp_min : {weatherInformation.temp_min}&deg;C</div>
       <div className='font-semibold text-zinc-300 text-lg'>Pressure : {weatherInformation.pressure} hPa</div>
       <div className='font-semibold text-zinc-300 text-lg'>Speed : {weatherInformation.speed} m/s</div>
     </div>
    </div>
    </>
  )
}

export default Information