import axios from 'axios';

const API_KEY = '55ab10375cf698e3a2fd82883b4b324d';
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FEATHER_WEATHER';

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);
	console.log('Request',request);

	return {
		type:FETCH_WEATHER,
		payload:request
	};
}
