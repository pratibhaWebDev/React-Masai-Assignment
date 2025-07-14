const WeatherInfo = ({ lat, lon }) => {
    const [weather, setWeather] = useState(null);
  
    useEffect(() => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=YOUR_API`)
        .then((res) => res.json())
        .then(setWeather);
    }, [lat, lon]);
  
    return weather ? <div>{weather.weather[0].description}</div> : null;
  };
  