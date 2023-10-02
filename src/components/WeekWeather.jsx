import './weekWeather.css'
import Sun from '../assets/sunny.png'

export default function WeekWeather() {
  return (
    <section className='WeekWeather'>
        <div className="day">
            <p className="day-name">Amanhã</p>
            <div className="img-day">
                <img src={Sun} alt="weather"/>
            </div>
            <div className="day-temperature">
                <div className="temperature-min">21º</div>
                <div className="temperature-max">16º</div>
            </div>
        </div>
        <div className="day">
            <p className="day-name">Segunda</p>
            <div className="img-day">
                <img src={Sun} alt="weather"/>
            </div>
            <div className="day-temperature">
                <div className="temperature-min">28º</div>
                <div className="temperature-max">20º</div>
            </div>
        </div>
        <div className="day">
            <p className="day-name">Terça</p>
            <div className="img-day">
                <img src={Sun} alt="weather"/>
            </div>
            <div className="day-temperature">
                <div className="temperature-min">25º</div>
                <div className="temperature-max">21º</div>
            </div>
        </div>
        <div className="day">
            <p className="day-name">Quarta</p>
            <div className="img-day">
                <img src={Sun} alt="weather"/>
            </div>
            <div className="day-temperature">
                <div className="temperature-min">20º</div>
                <div className="temperature-max">14º</div>
            </div>
        </div>
        <div className="day">
            <p className="day-name">Quinta</p>
            <div className="img-day">
                <img src={Sun} alt="weather"/>
            </div>
            <div className="day-temperature">
                <div className="temperature-min">24º</div>
                <div className="temperature-max">18º</div>
            </div>
        </div>
    </section>
  )
}
