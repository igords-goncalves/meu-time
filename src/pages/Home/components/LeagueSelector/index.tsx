import { Button } from '../../../../components/__common__';
import './style.scss';
import { Calendar } from 'lucide-react';

type LeagueSelectorProps = {
  league?: any;
};

export const LeagueSelector = ({ league }: LeagueSelectorProps) => {
  return (
    <div className="league">
      <div className="league_wrapper">
        <div className="league_logo_wrapper">
          <img
            src={league?.league?.logo}
            alt="Logo da liga"
            className="league_logo_img"
          />
        </div>
        <div className="league_title--wrapper">
          <h3 className="league_title">{league?.league?.name}</h3>
          <span className="status">finalizado</span>
        </div>
        <div className="league_country--wrapper">
          <img src={league?.country?.flag} className="flag" alt="Bandeira" />
          <p className="league_country">{league?.country?.name}</p>
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
