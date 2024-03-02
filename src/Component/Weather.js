import React, { useState } from "react";
import  Axios  from "axios";
import './Weather.css';
import { IoIosSearch } from "react-icons/io";


 const city = "london";

const Weather=()=>{
       

    const [city, setCity] = useState()
    const [data, setData] = useState()
  
    const fetchData  = async () =>{

        try {

              const response = await Axios.get (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=16bfa98849718de13b6e8978b87d47b8&units=metric`)
                
              setData(response.data)
            }

        catch(err){
           alert('Please enter the City Name')
        }
    }
 
      return (


            <div className="container-weather">
                
                <div className="container-weather1">

                <h1>Weather App</h1>

                <input type="text" className="int" value={city} 
                onChange={e =>setCity(e.target.value)} placeholder="Enter the City Name"></input>


                <button onClick={fetchData}><IoIosSearch /></button><br></br><br></br>

                <img src="https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png"/>
               
                </div>
                 
               
                <div className="container-weather2">

                    {data && (
                          <div>

                           <h1>{data.name}, {data.sys.country}</h1>

                           <h2>{Math.round(data.main.temp)}</h2>

                           <div>
                             <h3>Latitude={data.coord.lat}</h3>
                             <h3>Longitutional={data.coord.lat}</h3>
                           </div>
                          </div>
                    )}
                </div>


            </div>
      )

}

export default Weather;