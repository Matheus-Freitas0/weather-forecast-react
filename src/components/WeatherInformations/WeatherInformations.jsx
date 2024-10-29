function WeatherInformations({ weather }) {
    console.log(weather);
    
  return (
    <div>
      <h2>{weather.name}</h2>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${weather}.png`}
        />
        <p>{}°C</p>
        </div>
          <p>{}</p>
          <div>
              <p>Sensação térmica: { }</p>
              <p>Umidade: { }</p>
              <p>Pressão: { }</p>
          </div>
    </div>
  );
}

export default WeatherInformations;
