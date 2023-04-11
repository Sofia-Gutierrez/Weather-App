
function WeatherDescription({ name, lat, lon, temp, description, humidity, wind, icon }) {
    return(
        <>
            <h2 className="city-name"><i className="fa-solid fa-location-dot"></i>Ciudad: {name}</h2>
            <div className="weather-description">
                <img src={`https://openweathermap.org/img/wn/${icon}.png`} className="weather-icon" alt={`icono del clima ${description}`} />
                <p className="description">Descripcion: {description}</p> 
                <p className="temp">Temperatura: { temp }°  {temp && <i className="fa-solid fa-temperature-three-quarters"></i>}</p> 
                <p className="humidity">Humedad: {humidity}   {humidity && <i className="fas fa-water"></i>}</p> 
                <p className="wind">Velocidad del viento: {wind}  { wind &&  <i className="fa-solid fa-wind"></i> }</p> 
                <span className="lat">Lat: { lat } Lon: { lon }</span>
            </div>
        </>
        
    )
}

export default WeatherDescription;