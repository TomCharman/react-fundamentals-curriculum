const apiKey = 'c412865f852b53e7c39850735deb5352';

async function getData(url) {
  const response = await fetch(url);
  return response.json();
}

function handleError (error) {
  console.warn(error);
  return null;
}

export async function getCurrentWeather (search) {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&type=accurate&APPID=${apiKey}`;

  const currentWeather = await Promise.all([getData(url)])
    .catch(handleError);

  return currentWeather;
}

// export async function get5DayForecast(search) {
//   const url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${search}&type=accurate&APPID=${apiKey}&cnt=5`;

//   const response = await fetch(url);
//   return response.json();
// }