import React from 'react';
import PropTypes from 'prop-types';
import { timeParse, timeFormat } from 'd3-time-format';

function ForecastElement (props) {
  const time = timeParse('%Y-%m-%d %H:%M:%S')(props.time);
  const timeString = timeFormat("%-I%p, %A %-d %b")(time);
  const icon = props.icon;

  return (
    <div className="forecastElement" onClick={props.onClick}>
      <img src={`/app/images/weather-icons/${icon}.svg`} />
      <h2>{timeString}</h2>
    </div>
  )
}

ForecastElement.propTypes = {
  time: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default ForecastElement