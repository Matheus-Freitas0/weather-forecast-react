import WeatherInformations from "./components/WeatherInformations/WeatherInformations";
import { useState, useRef } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [weather, setWeather] = useState();
  const [weather5Days, setWeather5Days] = useState();
  const inputRef = useRef();

  async function searchCity() {
    const cityName = inputRef.current.value;
    const key = "8aa46f48d922e668583a007f2503f1f1";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&lang=pt_br&units=metric`;
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}&lang=pt_br&units=metric`;

    const apiDataWeather = await axios.get(url);
    const apiInfo5Days = await axios.get(url5Days)

    setWeather5Days(apiInfo5Days.data)
    setWeather(apiDataWeather.data);
  }

  return (
    <div className="container">
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInformations weather={weather} />}
      {weather5Days && <WeatherInformations weather5Days={weather5Days} />}
    </div>
  );
}

export default App;
