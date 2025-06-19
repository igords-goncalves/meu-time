import { Button } from '../../../../components/__common__';
import './style.scss';
import flagTest from '../../../../assets/img/flag-test.svg';
import leagueTest from '../../../../assets/img/league-sample.png';
import { Calendar } from 'lucide-react';

export const LeagueSelector = () => {
  return (
    <div className="league">
      <div className="league_logo">
        <img src={leagueTest} alt="logo liga" />
      </div>
      <div className="league_wrapper">
        <div className="league_country--wrapper">
          <img src={flagTest} alt="Bandeira" />
          <p className="league_country">Brazil</p>
        </div>
        <div className="league_title--wrapper">
          <h3 className="league_title">Brasileirão</h3>
          <span className="status">finalizado</span>
        </div>
        <div className="league_season--wrapper">
          <p className="season_title">Temporada</p>
          <p className="period_season">02/2025 - 11/2025</p>
        </div>
        <div className="select_wrapper">
          <select>
            <option>Temporada de 2015</option>
          </select>
          <Calendar className="calendar_icon" color="#adadad" />
        </div>
        <hr />
        <Button type={'button'}>Ver Times</Button>
      </div>
    </div>
  );
};
