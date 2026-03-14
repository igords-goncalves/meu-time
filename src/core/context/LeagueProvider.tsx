import { ReactNode, useState } from 'react';
import { LeagueContext } from './LeagueContext';

export const LeagueProvider = ({ children }: { children: ReactNode }) => {
  const [leagues, setLeagues] = useState<[] | null>(null);
  const [season, setSeason] = useState<number | null>(null);

  const [selectedLeague, setSelectedLeague] = useState<number | null>(null);
  const [selectedSeason, setSelectedSeason] = useState<number | null>(null);

  return (
    <LeagueContext.Provider
      value={{
        leagues,
        setLeagues,
        season,
        setSeason,
        // to render teams
        selectedLeague,
        setSelectedLeague,
        selectedSeason,
        setSelectedSeason,
      }}
    >
      {children}
    </LeagueContext.Provider>
  );
};
