import { API_KEY, BASE_URL } from '../utils/constants.js'
import { useState, useEffect } from 'react'

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState({})
  const [message, setMessage] = useState('Enter city name')

  const getWeather = async () => {
    try {
      const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Enter correct city name')
      }
      const data = await response.json()
      setWeatherData({
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        pressure: data.main.pressure,
        sunset: data.sys.sunset * 1000
      })
      setMessage('')
    } catch (e) {
      setMessage(e.message)
    }
    // const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setWeatherData({
    //         city: data.name,
    //         country: data.sys.country,
    //         temp: data.main.temp,
    //         pressure: data.main.pressure,
    //         sunset: data.sys.sunset * 1000
    //       }
    //     )
    //     setMessage('')
    //   })
    //   .catch(() => {setMessage('Enter correct city name')})
  }

  useEffect(() => {
    getWeather()
  }, [city])

  return (
    <div className={'infoWeath'}>
      {!message &&
        <>
          <p>Location: {weatherData.city}, {weatherData.country}</p>
          <p>Temp: {weatherData.temp}</p>
          <p>Pressure: {weatherData.pressure}</p>
          <p>Sunset: {new Date(weatherData.sunset).toLocaleTimeString()}</p>
        </>
      }
      {message}

    </div>)

}

export default Weather
