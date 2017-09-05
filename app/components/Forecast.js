import React from 'react';
import Header from './Header';
import { getForecast } from '../utils/weatherApi';
import queryString from 'query-string';
import ForecastElement from './ForecastElement';

class Forecast extends React.Component {
  state = {
    loading: true,
    city: null,
    forecast: null
  }

  async componentDidMount() {
    const { city } = queryString.parse(this.props.location.search)
    console.log(city);

    const weather = await getForecast(city);

    console.log(weather.city.name);
    console.log(weather.list);

    this.setState(() => ({
      city: weather.city.name,
      forecast: weather.list,
      loading: false
    }))
  }

  render() {
    const { loading, city, forecast } = this.state;

    if (loading) {
      return (
        <div>
          <Header title='Clever Title' />
          <h1>Loading</h1>
      </div>
      )
    }

    return (
      <div>
        <Header title='Clever Title' />
        <h1 className='contentHeading'>{city}</h1>
        <ul className='forecast'>
        {forecast.map((weather) => {
          return (
            <ForecastElement
              key={weather.dt_txt}
              time={weather.dt_txt}
              icon={weather.weather[0].icon} />
          )
        })}
        </ul>
      </div>
    )
  }
}

export default Forecast;
