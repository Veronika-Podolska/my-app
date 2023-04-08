import React from "react";
import "./additionalWeatherInfo.css";

export default function AdditionalWeatherInfo(props) {
  return (
    <div className="row">
      <div className="col degree-info">
        <span id="current-degree">{props.temperature}</span>
        <a href="#" id="celsius-link">
          °C|
        </a>
        <a href="#" id="fahrenheit-link">
          F
        </a>
      </div>
      <div className="col weather-additional-info">
        <ul>
          <li>
            <span id="current-description">{props.description}</span>
          </li>
          <li>
            Humidity <span id="current-humidity">{props.humidity}</span>%
          </li>
          <li>
            Wind <span id="current-wind">{props.wind}</span>m/s
          </li>
        </ul>
      </div>
    </div>
  );
}
