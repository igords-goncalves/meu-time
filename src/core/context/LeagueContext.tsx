import { createContext } from 'react';

export interface League {
  league: {
    id: number;
    name: string;
    logo: string;
  };
  country: {
    flag: string;
  };
  seasons: Array<{
    year: number;
    current: boolean;
  }>;
}

interface LeagueContextType {
  leagues: League[] | null;
  setLeagues: (leagues: League[] | null) => void;
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
