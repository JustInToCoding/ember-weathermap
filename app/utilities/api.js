import fetch from 'fetch';
import ENV from '../../config/environment';

const { APP: { OPENWEATHERMAP_APIKEY } } = ENV;

function get(url) {
  let requestInit = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  };
  return fetch(url, requestInit)
}

export async function getWeather(latitude, longitude) {
  let response = await get(`api.openweathermap.org/data/2.5/weather?lat=${latitude}&${longitude}=${OPENWEATHERMAP_APIKEY}`);
  let contentType = response.headers.get('content-type');
  if(contentType && contentType.includes('application/json')) {
    let jsonResponse = await response.json();
    return jsonResponse;
  }
  throw new TypeError('The API didn\'t respond with JSON.');
}
