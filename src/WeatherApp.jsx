import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Kolkata",
    country: "IN",
    feelsLike: 35.49,
    humidity: 76,
    temp: 29.61,
    tempMax: 29.61,
    tempMin: 29.61,
    visibility: 10000,
    weather: "clear sky",
    windSpeed: 3.97,
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ marginTop: "-100px" }}>Weather app</h2>
      <SearchBox updateInfo={updateInfo} />
      <br />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
