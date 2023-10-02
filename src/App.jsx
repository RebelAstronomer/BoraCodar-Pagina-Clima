import CurrentWeather from "./components/CurrentWeather"
import AirQuality from "./components/AirQuality"
import WeekWeather from "./components/WeekWeather"

function App() {
  return (
    <main>
      <div className="containerMain">
        <CurrentWeather/>
        <AirQuality/>
        <WeekWeather/>
      </div>
    </main>
  )
}

export default App
