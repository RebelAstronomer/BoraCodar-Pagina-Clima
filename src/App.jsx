import CurrentWeather from './components/CurrentWeather';
import AirQuality from './components/AirQuality';

function App() {

  return (
    <main>
      <div className="containerMain">
        <CurrentWeather/>
        <AirQuality/>
      </div>
    </main>
  );
}

export default App;
