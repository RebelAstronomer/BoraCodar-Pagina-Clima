import { useState, useMemo, useEffect } from 'react';
import { getWeatherForecast } from './lib/weather';

function ApiTest() {

  const [data, setData] = useState();

  const fetchData = useMemo(() => async () => {
    setData(await getWeatherForecast('São Bernardo do Campo'));
  }, []);

  useEffect(() => {
    fetchData();
  },[fetchData]);

  return (
    <main>
      {JSON.stringify(data)}
    </main>
  );
}

export default ApiTest;