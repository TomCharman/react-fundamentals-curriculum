import React from 'react'
import Header from './Header';
import ForecastElement from './ForecastElement';

const KelvinToCelcius = (valueInK) => valueInK - 273.15

export default function Detail(props) {
  const weather = props.location.state;
  console.log(weather)
  const deets = weather.weather[0];
  const minTemp = KelvinToCelcius(weather.main.temp_min);
  const maxTemp = KelvinToCelcius(weather.main.temp_max);
  return (
    <div>
      <Header title='Clever Title'/>
      <div className='Details'>
        <ForecastElement time={weather.dt_txt} icon={deets.icon} />
        <p>{weather.name}</p>
        <p>{deets.main}</p>
        <p>min temp: {minTemp.toFixed(0)}ºC</p>
        <p>max temp: {maxTemp.toFixed(0)}ºC</p>
        <p>humidity: {weather.main.humidity}</p>
      </div>
    </div>
  )
}
