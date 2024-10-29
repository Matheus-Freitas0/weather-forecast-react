import { useState, useRef } from 'react'
import axios from 'axios'

function App() {
  const [weather, setWeather] = useState({})
  const inputRef = useRef()

  async function searchCity() {
    
    const city = inputRef.current.value
    const key = "8aa46f48d922e668583a007f2503f1f1"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const apiDataWeather = await axios.get(url)
    setWeather(apiDataWeather.data)

    console.log(apiDataWeather.data)
  }

  return (
    <div>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade'/>
      <button onClick={searchCity}>Buscar</button>
    </div>
  )
}

export default App
