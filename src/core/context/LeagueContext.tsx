import { createContext } from 'react';

interface LeagueContextType {
  leagues: [] | null;
  setLeagues: (leagues: [] | null) => void;
  season: number | null;
  setSeason: (season: number | null) => void;
  selectedLeague: number | null;
  setSelectedLeague: (league: number) => void;
  selectedSeason: number | null;
  setSelectedSeason: (season: number) => void;
}

export const LeagueContext = createContext<LeagueContextType | undefined>(
  undefined,
);
