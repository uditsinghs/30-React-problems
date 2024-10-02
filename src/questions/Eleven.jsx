import { useState } from "react";

const Eleven = () => {
  const [weather, setWeather] = useState(null);
  const [place, setPlace] = useState('');
  const [error, setError] = useState(null);

  const searchWeather = (e) => {
    e.preventDefault()
    if (place) {
      fetch(`https://api.weatherapi.com/v1/current.json?key=27fa04acd7f6449db1e21233240210&q=${place}&aqi=no`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setWeather(data);
          setError(null); // Clear error if successful
        })
        .catch((error) => setError(error.message));
    }
  };


  return (
    <div>
      <p className="mb-4">How&lsquo;s the Weather in your city..?</p>
      <form onSubmit={searchWeather}>
      <input
        className="text-black rounded-lg text-center outline-none"
        placeholder="Enter City"
        type="text"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
      />
      </form>
      {error ? (
        <p>Error: {error}</p>
      ) : weather ? (
        <div>
          <p>Country: {weather.location.country}</p>
          <p>Place: {weather.location.name}</p>
          <p>Local Time: {weather.location.localtime}</p>
          <span>{weather.current.condition.text}</span> 
          <img src={weather.current.condition.icon} alt="weather icon" />
          <p>Temp in Celsius: {weather.current.temp_c}°C</p>
        </div>
      ) : (
        <p>Enter a city </p>
      )}
    </div>
  );
};

export default Eleven;
