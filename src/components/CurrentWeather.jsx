import './currentWeather.css';

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
        <div className='minMaxDegreesNumber'>
            <span className='minDegreesNumber'>22°</span>
            <span className='maxDegreesNumber'>16°</span>
        </div>
      </div>
      <div className="statistcs"></div>
      <div className="weatherIndicated"></div>
    </section>
  );
}
