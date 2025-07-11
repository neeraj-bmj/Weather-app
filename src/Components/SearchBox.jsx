import React, { useState } from 'react'

const SearchBox = ({updateInformation}) => {
    let [city , setcity] = useState("");
    let [ERR , serERR] = useState(false);
   
    const API_URL ="https://api.openweathermap.org/data/2.5/weather"
    const APT_KEY = "7e80a94afdf5b8bc93a201bf01938431"
    

    let getWeatherInformation = async(city)=>{
       try {
        let result = await fetch(`${API_URL}?q=${city}&appid=${APT_KEY}&units=metric`);
        let jsonResult = await result.json();
        console.log(jsonResult);
        let weatherData ={
          name :  jsonResult.name,
          country : jsonResult.sys.country,
          feels_like : jsonResult.main.feels_like,
          humidity : jsonResult.main.humidity,
          temp : jsonResult.main.temp,
          temp_max : jsonResult.main.temp_max,
          temp_min : jsonResult.main.temp_min,
          pressure : jsonResult.main.pressure,
          speed : jsonResult.wind.speed,
          weather : jsonResult.weather[0].description
        }
        console.log(weatherData);
        return weatherData;
       } catch (error) {
        throw error;
       }
    }

    let handleChange = (event)=>{
    //   console.log(event.target.value);
      setcity(event.target.value);
    }

    let handleSubmit = async (event)=>{
      try {
      event.preventDefault();
      console.log(city)
      setcity("");
      let newValue = await getWeatherInformation(city);
      updateInformation(newValue)
      } catch (error) {
        serERR(true);
      }
        
    }
  return (
    <>
    <div className="searchBox text-zinc-200 text-5xl font-bold ">Search Somethhing here... </div>
    <form action="" onSubmit={handleSubmit} className='flex flex-col justify-center items-center  gap-5'>
        <input value={city} onChange={handleChange} className='px-3 py-2 bg-zinc-400 rounded-lg text-zinc-100 font-semibold' type="text" placeholder='City Name...' />
        {ERR && <p className="text-red-800 font-semibold">Please enter a valid city name</p>}
        <button className='px-3 py-2 bg-blue-500 rounded-lg font-semibold text-zinc-200' type='submit'>Search</button>

    </form>
    </>
  )
}

export default SearchBox;