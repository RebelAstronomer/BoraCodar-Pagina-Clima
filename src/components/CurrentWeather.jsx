import './currentWeather.css';
import Windy from '../assets/windy.png'
import Humidity from '../assets/humidity.png'
import MaybeRain from '../assets/maybe-rain.png'

export default function CurrentWeather() {
  return (
    <section className="mainStatus">
      <div className="location">
        <div className='pinIcon'></div>
        <div className='pinTxt'>
          Rio do Sul, <span>SC</span>
        </div>
      </div>
      <div className="temperature">
        <div className='degreesNumber'>
          <p>18</p>
        </div>
        <div className='degrees'>
          °C
        </div>
        <div className='minMaxDegreesNumber'>
            <span className='minDegreesNumber'>22°</span>
            <span className='maxDegreesNumber'>16°</span>
        </div>
      </div>
      <div className="statistcs">
        <div className='boxStatistcs'>
          <img src={Windy} alt="Vento" />
          <p className='infoStatistcs'>
            Vento
            <p>17 <span className='text-sm'>km/h</span></p>
          </p>
        </div>
        <div className='boxStatistcs'>
          <img src={Humidity} alt="Umidade" />
            <p className='infoStatistcs'>
              Umidade
              <p>31 <span className='text-sm'>%</span></p>
            </p>
        </div>
        <div className='boxStatistcs'>
        <img src={MaybeRain} alt="Chuva" />
          <p className='infoStatistcs'>
            Chuva
            <p>10 <span className='text-sm'>%</span></p>
          </p>
        </div>
      </div>
      <div className="weatherIndicated"></div>
    </section>
  );
}
