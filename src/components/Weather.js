import { useWeatherMap } from "../hooks/useWeatherMap";
import "../assets/css/Weather.css";
import errWeather from "../assets/img/black-weather.png";
import WeatherDescription from "./WeatherDescription";
import weather from "../assets/img/Weather.png";

function Weather() {
    const { name, lat, lon, sendCity, temp, description, humidity, wind, icon, err} = useWeatherMap(); 

    return(
        <div className="container-weather">
            <form onSubmit={sendCity} className="weather-form">
                <input name="city" className="weather-input" placeholder="Introduce una ciudad"></input>
                <button className="btn">Buscar</button>
                {err && <p className="err-msg">{err}</p> }
                {err &&  <img src={errWeather} className="err-img" alt="imagen del clima" /> }
            </form>
            {!err && !lat && <h4 className="initial-msg">Busca una ciudad para empezar.</h4>}
            {!err && !lat && <img src={weather} alt="imagen del clima" />}
            {lat && !err && <WeatherDescription name={name} lat={lat} lon={lon} temp={temp} description={description} humidity={humidity} wind={wind} icon={icon} />}
        </div>
    )
}

export default Weather;