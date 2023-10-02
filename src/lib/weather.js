import axios from 'axios';

/* Function to get data from the api */
async function getWeatherForecast(location) {
  try {
    const res = await axios.request({
      method: 'get',
      url: `${import.meta.env.VITE_API_URL}/forecast.json`,
      params: {
        key: import.meta.env.VITE_API_KEY,
        q: location,
        days: 5,
        aqi: 'yes',
        alerts: 'no',
        lang: 'pt',
      }
    });
    return res;
  } catch (error) {
    return {
      message: 'No data has been funded',
    };
  }
}

export {
  getWeatherForecast,
};