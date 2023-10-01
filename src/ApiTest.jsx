import { useState, useEffect, useCallback } from 'react';
import { getWeatherForecast } from './lib/weather';

async function fetchData() {
  return await getWeatherForecast('São Bernardo do Campo');
}

function ApiTest() {
    
  const [data, setData] = useState();

  const fetchDataMemorized = useCallback(() => {
    fetchData().then((result) => {
      setData(result);
    });
  }, []);

  useEffect(() => {
    fetchDataMemorized();
  },[fetchDataMemorized]);

  return (
    <main>
      {JSON.stringify(data)}
    </main>
  );
}

export default ApiTest;