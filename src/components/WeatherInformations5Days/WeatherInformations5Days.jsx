import "./WeatherInformations5Days.css";

function WeatherInformations5Days({ weather5Days }) {
  console.log(weather5Days);
  let dailyForecast = {};

  for (let forecast of weather5Days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();
    const weekday = new Date(forecast.dt * 1000).toLocaleDateString("pt-br", {
      weekday: "long",
    });

    if (!dailyForecast[date]) {
      dailyForecast[date] = {
        temp_min: forecast.main.temp_min,
        temp_max: forecast.main.temp_max,
        weather: forecast.weather[0],
        weekday,
      };
    } else {
      dailyForecast[date].temp_min = Math.min(
        dailyForecast[date].temp_min,
        forecast.main.temp_min
      );
      dailyForecast[date].temp_max = Math.max(
        dailyForecast[date].temp_max,
        forecast.main.temp_max
      );
    }
  }

  const nextFiveDaysForecast = Object.values(dailyForecast).slice(1, 6);

  return (
    <div className="weather-container">
      <h3>Previsão para os proximos 5 dias</h3>
      <div className="weather-list">
        {nextFiveDaysForecast.map((forecast) => (
          <div key={forecast.dt} className="weather-item">
            <p className="weather-day">{forecast.weekday}</p>
            <img
              src={`http://openweathermap.org/img/wn/${forecast.weather.icon}.png`}
              alt="Weather icon"
              className="weather-img"
            />
            <p className="weather-desc">{forecast.weather.description}</p>
            <p>{Math.round(forecast.temp_max)}°C max /{Math.round(forecast.temp_min)}°C min
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherInformations5Days;
