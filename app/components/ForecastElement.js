import React from 'react';
import { timeParse, timeFormat } from 'd3-time-format';

function ForecastElement (props) {
  var time = timeParse('%Y-%m-%d %H:%M:%S')(props.time);
  var timeString = timeFormat("%-I%p, %A %-d %b")(time);
  var icon = props.icon;

  return (
    <div className="forecastElement">
      <img src={`/app/images/weather-icons/${icon}.svg`} />
      <h2>{timeString}</h2>
    </div>
  )
}

export default ForecastElement