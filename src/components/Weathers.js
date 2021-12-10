import React, { useState, useEffect } from "react";

export default function Weather() {
  const key = "b5a66079fb72df6c3dadc972ef411436";
  const mapkey =
    "pk.eyJ1IjoibW9pZXpzaGFpa2gxOCIsImEiOiJja3dnbDRweTcwZGl5MzFwYjBiODF2NmhtIn0.tfKa8Gn_wUH-lkMzxpwxFQ";

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [icon, setIcon] = useState("");
  const [points, setPoints] = useState([]);

  const handleOnChange = (e) => {
    setCity(e.target.value);
  };

  const getCordinates = () => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${mapkey}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("weather", data);
        if (data && data.features && data.features.length) {
          setPoints(data.features);
        }
      });
  };

  const getWeather = ([lat, lon]) => {
    // if (points && points.length === 2) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("temp", data);
        if (data && data.main && data.main.temp) {
          setWeather(data?.main?.temp);
          setIcon(data?.weather[0]?.icon);
        }
        console.log("check", weather);
      });
  };

  useEffect(() => {
    setPoints([]);
  }, [weather]);

  return (
    <>
      <div id="Form">
        <h1>Weather App</h1>
        <input
          type="text"
          placeholder="Enter City Name..."
          onChange={handleOnChange}
        ></input>
        <button id="btn" type="submit" onClick={getCordinates}>
          GET WEATHER
        </button>
        <div>
          {points
            ? points.map((location, index) => {
                console.log("Location", index, location);
                return (
                  <div
                    onClick={() => getWeather(location.center)}
                    key={location.id}
                  >
                    <p>{location.place_name}</p>
                  </div>
                );
              })
            : "No Data Found"}
        </div>
      </div>
      {weather ? (
        <div className="res">
          <h2>Temparature:</h2>
          <p>{weather}</p>
          <h2>&deg;C</h2>
          {icon ? (
            <img
              alt=""
              src={"http://openweathermap.org/img/wn/" + icon + "@2x.png"}
            />
          ) : null}
        </div>
      ) : null}
    </>
  );
}
