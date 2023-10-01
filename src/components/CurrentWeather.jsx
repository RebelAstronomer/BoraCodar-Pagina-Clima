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
      <div className="temperature"></div>
      <div className="statistcs"></div>
      <div className="weatherIndicated"></div>
    </section>
  );
}
