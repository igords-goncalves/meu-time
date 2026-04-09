import { useContext } from 'react';
import { LeagueContext } from '../core/context/LeagueContext';

export const useLeaguesContext = () => {
  const context = useContext(LeagueContext);
  if (context === undefined) {
    throw new Error('useLeagues must be used within a LeaguesProvider');
  }
  return context;
};
