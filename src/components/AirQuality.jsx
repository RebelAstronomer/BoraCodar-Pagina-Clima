import './airquality.css';

export default function AirQuality() {
  return (
    <section className='air-quality'>
      <h1 className='quality-title'>Qualidade do Ar</h1>
      <div className="result">
        <p className='result-text'>Boa</p>
        <p className='result-number'>21</p>
      </div>
      <div className="quality-standards">
        <div className="fine-particles">
          <p className='air-numbers'>12.9</p>
          <p className='air-subtitles'>PM2.5</p>
        </div>
        <div className="fine-particles">
          <p className='air-numbers'>12.9</p>
          <p className='air-subtitles'>PM10</p>
        </div>
        <div className="fine-particles">
          <p className='air-numbers'>2.1</p>
          <p className='air-subtitles'>SO<sub>2</sub></p>
        </div>
        <div className="fine-particles">
          <p className='air-numbers'>1.4</p>
          <p className='air-subtitles'>NO<sub>2</sub></p>
        </div>
        <div className="fine-particles">
          <p className='air-numbers'>21.2</p>
          <p className='air-subtitles'>O<sub>3</sub></p>
        </div>
        <div className="fine-particles">
          <p className='air-numbers'>0.7</p>
          <p className='air-subtitles'>CO</p>
        </div>
      </div>
    </section>
  );
}
