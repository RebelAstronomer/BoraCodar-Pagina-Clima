/* eslint-disable react/prop-types */
import './currentWeather.css';
import Windy from '../assets/windy.png';
import Humidity from '../assets/humidity.png';
import MaybeRain from '../assets/maybe-rain.png';

export default function CurrentWeather({ data }) {
  return (
    <section className="mainStatus">
      <div className="location">
        <div className='pinIcon'></div>
        <div className='pinTxt'>
          {data?.location?.name}, <span>{data?.location?.region}</span>
        </div>
      </div>
      <div className="temperature">
        <div className='degreesNumber'>
          <p>{Math.round(data?.current?.temp_c)}</p>
        </div>
        <div className='degrees'>
          °C
        </div>
        <div className='minMaxDegreesNumber'>
          <span className='minDegreesNumber'>{Math.round(data?.forecast?.forecastday[0]?.day?.maxtemp_c)}°</span>
          <span className='maxDegreesNumber'>{Math.round(data?.forecast?.forecastday[0]?.day?.mintemp_c)}°</span>
        </div>
      </div>
      <div className="statistcs">
        <div className='boxStatistcs'>
          <img src={Windy} alt="Vento" />
          <p className='infoStatistcs'>
            Vento
            <p>{Math.round(data?.current?.wind_kph)} <span className='text-sm'>km/h</span></p>
          </p>
        </div>
        <div className='boxStatistcs'>
          <img src={Humidity} alt="Umidade" />
          <p className='infoStatistcs'>
            Umidade
            <p>{data?.current?.humidity} <span className='text-sm'>%</span></p>
          </p>
        </div>
        <div className='boxStatistcs'>
          <img src={MaybeRain} alt="Chuva" />
          <p className='infoStatistcs'>
            Chuva
            <p>{data?.current?.precip_mm} <span className='text-sm'>%</span></p>
          </p>
        </div>
      </div>
      <div className="weatherIndicated"></div>
    </section>
  );
}
