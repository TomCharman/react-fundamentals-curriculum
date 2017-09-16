const apiKey = 'c412865f852b53e7c39850735deb5352';
const baseURL = 'http://api.openweathermap.org/data/2.5/';

async function getData(url) {
  const response = await fetch(url);

  return await Promise.resolve(response.json())
    .catch(handleError);
}

function handleError (error) {
  console.warn(error);
  return null;
}

export async function getCurrentWeather (search) {
  const url = `${baseURL}weather?q=${search}&type=accurate&APPID=${apiKey}`;

  return await getData(url);
}

export async function getForecast(search) {
  const url = `${baseURL}forecast?q=${search}&type=accurate&APPID=${apiKey}&cnt=5`;

  return await getData(url);
}