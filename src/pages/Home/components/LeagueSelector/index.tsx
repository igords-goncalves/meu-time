import { useState, useEffect } from 'react';
import { Button } from '../../../../components/__common__';
import './style.scss';
import { Calendar } from 'lucide-react';

type LeagueSelectorProps = {
  league?: any;
};

export const LeagueSelector = ({ league }: LeagueSelectorProps) => {
  const [selectedSeason, setSelectedSeason] = useState<any>(null);

  useEffect(() => {
    if (league?.seasons) {
      const currentSeason = league.seasons.find(
        (season: any) => season.current,
      );
      setSelectedSeason(currentSeason || league.seasons[0]);
    }
  }, [league]);

  const handleSeasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const seasonYear = parseInt(event.target.value);
    const season = league.seasons.find((s: any) => s.year === seasonYear);
    setSelectedSeason(season);
  };

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
          <span
            className={`status ${
              selectedSeason?.current ? 'active' : 'finished'
            }`}
          >
            {selectedSeason?.current ? 'ativo' : 'finalizado'}
          </span>
        </div>
        <div className="league_country--wrapper">
          <img src={league?.country?.flag} className="flag" alt="Bandeira" />
          <p className="league_country">{league?.country?.name}</p>
        </div>
        <div className="league_season--wrapper">
          <p className="season_title">Período</p>
          <p className="period_season">
            {selectedSeason &&
              `${new Date(selectedSeason.start).toLocaleDateString('pt-BR', {
                month: '2-digit',
                year: 'numeric',
              })} - ${new Date(selectedSeason.end).toLocaleDateString('pt-BR', {
                month: '2-digit',
                year: 'numeric',
              })}`}
          </p>
        </div>
        <div className="select_wrapper">
          <select
            value={selectedSeason?.year || ''}
            onChange={handleSeasonChange}
          >
            {league?.seasons?.map((season: any) => (
              <option key={season.year} value={season.year}>
                Temporada de {season.year}
              </option>
            ))}
          </select>
          <Calendar className="calendar_icon" color="#adadad" />
        </div>
        <hr />
        <Button type={'button'}>Ver Times</Button>
      </div>
    </div>
  );
};
