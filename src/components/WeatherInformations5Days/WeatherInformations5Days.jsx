import './WeatherInformations5Days.css'

function WeatherInformations5Days({ weather5Days }) {
  console.log(weather5Days);
  let dailyForecast = {}

  for (let forecast of weather5Days.list){
    const date = new Date(forecast.dt * 1000).toLocaleDateString()
    
    if(!dailyForecast[date]){
      dailyForecast[date] = forecast
    }
  }
  
  const nextFiveDaysForecast = Object.values(dailyForecast).slice(1,6)



  return (
    <div className='weather-container'>
      <p>5 Days</p>
    </div>
  );
}

export default WeatherInformations5Days;
