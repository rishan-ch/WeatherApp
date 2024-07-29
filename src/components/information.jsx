import {useState} from 'react';

export default function Information(){
    const api_key = "817ffcf5febf4157bda80205240706";
    let [location ,setLocation] = useState('');
    let [weather, setWeather] = useState(null);

    let getWeather = async () =>{
        let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${location}&aqi=no`);
        const data = await response.json();
        setWeather(data);
    };
    
    let userInput = (i)=>{
        setLocation(i.target.value);
    };

    let search = ()=>{
        getWeather();
    }

    return(
        <>
            <h1>Weather condition</h1>
            <input type="text"value={location} onChange={userInput} placeholder="Enter City"/><br/>
            <button id="getWeather" onClick={search}>Show weather forecast</button><br/>
            {weather && (
                <>
            Time : <span id="time">{weather.current.last_updated}</span> <br/>
            Location : <span id="location">{weather.location.name}</span><br/>
            Temperature : <span id="temp">{weather.current.temp_c}</span><br/>
            Condition : <span id="condition">{weather.current.condition.text}</span><br/><br/>
            </>
            )}

        </>
    );
}


