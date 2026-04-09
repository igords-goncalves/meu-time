import { ReactNode, useMemo, useState } from 'react';
import { League, LeagueContext } from './LeagueContext';

export const LeagueProvider = ({ children }: { children: ReactNode }) => {
  const [leagues, setLeagues] = useState<League[] | null>(null);
  const [season, setSeason] = useState<number | null>(null);
  const [selectedLeague, setSelectedLeague] = useState<number | null>(null);
  const [selectedSeason, setSelectedSeason] = useState<number | null>(null);

  const value = useMemo(
    () => ({
      leagues,
      setLeagues,
      season,
      setSeason,
      // to render teams
      selectedLeague,
      setSelectedLeague,
      selectedSeason,
      setSelectedSeason,
    }),
    [leagues, season, selectedLeague, selectedSeason],
  );
  return (
    <LeagueContext.Provider value={value}>{children}</LeagueContext.Provider>
  );
};
