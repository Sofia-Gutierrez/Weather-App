import { useWeatherMap } from "../hooks/useWeatherMap";
import "../assets/css/Weather.css";

function Weather() {
    const { name, lat, lon, sendCity, temp, description, humidity, wind, err} = useWeatherMap(); 

    return(
        <div className="container-weather">
            <form onSubmit={sendCity} className="weather-form">
                <input name="city" className="weather-input"></input>
                <button className="btn">Button</button>
                {err && <p>{err}</p> }
            </form>
            <h2 className="city-name"><i className="fa-solid fa-location-dot"></i>Ciudad: {name}</h2>
            <span className="lat">Lat: { lat } Lon: { lon }</span>
            <div className="weather-description">
                <p className="temp">Temperatura: { temp }°  {temp && <i className="fa-solid fa-temperature-three-quarters"></i>}</p> 
                <p className="description">Descripcion: {description}</p>
                <p className="humidity">Humedad: {humidity}   {humidity && <i className="fas fa-water"></i>}</p> 
                <p className="wind">Velocidad del viento: {wind}  { wind &&  <i className="fa-solid fa-wind"></i> }</p> 
            </div>
        </div>
    )
}

export default Weather;