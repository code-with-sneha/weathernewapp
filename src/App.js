import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Current from './Components/Current';
import Forcast from './Components/Forcast';
import '../node_modules/bootstrap/dist/js/bootstrap';

function App() {
  const [city,setCity] = useState();
  const [ClickedCity,setClickedCity] = useState();
  const [suggestion,setSuggestion] = useState([]);
  const [current, setCurrent] = useState();
  const [forecast, setForecast] = useState();
  const [location, setLocation] = useState();
  
  const autoCompUrl = 'https://api.weatherapi.com/v1/search.json?key=83c0b17cb2774eac95723527231501&q=';

  const weatherUrl= (city)=> `https://api.weatherapi.com/v1/forecast.json?key=83c0b17cb2774eac95723527231501&q=${city}&days=7&aqi=no&alerts=no`;

  useEffect(()=>{
    if(city && city.length > 3){
    fetchAPI();
    }
  },[city]);

  const fetchAPI = async ()=>{
    try{
      const response =await axios.get(autoCompUrl+city);
      const res = response.data;
      console.log(res);
      const cityData = res.map((data)=>{
        return `${data.name},${data.region},${data.country}`;
      });
      setSuggestion(cityData);
    }
    catch(e){
      console.log('error',e);
    }
  }
const handleSelectCity = (city)=>{
  console.log('Clicked City',city);
  setClickedCity(city);
  fetchWeatherAPI(city);
  setSuggestion([]);
}
// const fetchWeatherAPI = (city)=>{
//   const response = axios.get(weatherUrl(city))
// }
const fetchWeatherAPI = async (city)=>{
  try{
    const response = await axios.get(weatherUrl(city));
    const res = response.data;
    // console.log(res);
    setCurrent(res.current);
    setForecast(res.forecast);
    setLocation(res.location);
    console.log('current',res.current);
    console.log('forecast',res.forecast);
    console.log('location',res.location);
  }
  catch(e){
    console.log('weather error',e);
  }
}
  return (
    <div className="container  bg-primary p-3 rounded mt-5" style={{ width: '80%' }} >
      <input type="text" value={ClickedCity} className='form-control' placeholder='Enter your city name' style={{alignItems: 'center'}} onChange={(e)=>{
        setCity(e.target.value);
        if(e.target.value===''){
          setClickedCity();
          setCurrent();
          setForecast();
          setLocation();
        }
        }} />
      {/* {city && <h4>{city}</h4>} */}
      {suggestion && suggestion.map((data,index)=>{
        return <div key={index} className='text-center bg-info rounded bg-opacity-10 border border-info border-opacity-25 text-white' style={{cursor: 'pointer'}} onClick={()=> handleSelectCity(data)}>{data}</div>
      })}
      {current && <Current current={current} location={location} />}
      {forecast && <Forcast forecast={forecast} location={location} />}
    </div>
  );
}

export default App;
