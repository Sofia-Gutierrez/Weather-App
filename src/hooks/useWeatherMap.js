import { useEffect, useState } from "react";

export function useWeatherMap() {
    const [city, setCity] = useState();
    const [name, setName] = useState();
    const [lat, setLat] = useState();
    const [lon, setLon] = useState();
    const [temp, setTemp] = useState();
    const [description, setDescription] = useState();
    const [humidity, setHumidity] = useState();
    const [wind, setWind] = useState();
    const [icon, setIcon] = useState();
    const [err, setErr] = useState();

    const sendCity = (e) => {
        e.preventDefault();
        const { city } = e.target.elements;
        const cityValue = city.value;
        setCity(cityValue);
        setErr(null)
       };

    useEffect(() => {

        if(city !== undefined) {
            const OPEN_WEATHER_MAP_APP = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=1afca710f1cf3ed49b775e0cd7c6eac3`;
            fetch(OPEN_WEATHER_MAP_APP)
            .then(res => res.json())
            .then(data => {
                const { name, lat, lon } = data[0];
                setName(name)
                setLat(lat)
                setLon(lon)
            })
            .catch(err => 
                setErr("No se encontró la ciudad."))
        } 
    }, [city]);

    useEffect(() => {
        if(lat && lon) {
            const OPEN_WEATHER_APP = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=1afca710f1cf3ed49b775e0cd7c6eac3`;
            fetch(OPEN_WEATHER_APP)
            .then(response => response.json())
            .then(data => {
                const { temp, humidity } = data.main;
                const { description, icon } = data.weather[0];
                const { speed } = data.wind
                setTemp(temp);
                setHumidity(humidity);
                setDescription(description);
                setWind(speed);
                setIcon(icon);
            })}
    }, [lat, lon]);
    return { temp, description, humidity, wind, name, lat, lon, icon, sendCity, city, err };
}
