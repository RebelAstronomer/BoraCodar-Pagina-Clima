import CurrentWeather from './components/CurrentWeather';
import AirQuality from './components/AirQuality';
import WeekWeather from './components/WeekWeather';

import { useState, useEffect, useCallback } from 'react';
import { getWeatherForecast } from './lib/weather';

async function fetchData() {
  return await getWeatherForecast('São Bernardo do Campo');
}

function App() {

  const [data, setData] = useState();

  const fetchDataMemorized = useCallback(() => {
    fetchData().then((result) => {
      setData(result.data);
    });
  }, []);

  useEffect(() => {
    fetchDataMemorized();
  },[fetchDataMemorized]);

  return (
    <main>
      <div className="containerMain">
        <CurrentWeather data={data}/>
        <AirQuality/>
        <WeekWeather/>
      </div>
    </main>
  );
}

export default App;
