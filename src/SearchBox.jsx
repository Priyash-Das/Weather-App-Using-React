import "./SearchBox.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "XXXXXXXXXXXXXXXXXXXXXXXXXXX";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      let result = {
        city: jsonResponse.name,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        temp: jsonResponse.main.temp,
        feelsLike: jsonResponse.main.feels_like,
        humidity: jsonResponse.main.humidity,
        weather: jsonResponse.weather[0].description,
        windSpeed: jsonResponse.wind.speed,
        visibility: jsonResponse.visibility,
        country: jsonResponse.sys.country,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <Paper
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <InputBase
            id="city"
            sx={{ ml: 1, flex: 1 }}
            placeholder="Enter city name"
            inputProps={{ "aria-label": "enter city name" }}
            autoComplete="off"
            required
            value={city}
            onChange={handleChange}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>
        <Button variant="outlined" disableElevation type="Submit">
          search
        </Button>
        {error && <p style={{ color: "red" }}>Oops!! No such place exists!</p>}
      </form>
    </div>
  );
}
