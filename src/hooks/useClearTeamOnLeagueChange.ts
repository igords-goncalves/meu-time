import { useEffect } from 'react';
import { useLeaguesContext } from './useLeaguesContext';

export const useClearTeamOnLeagueChange = (
  setSelectedTeam?: (team: null) => void,
) => {
  const { selectedLeague } = useLeaguesContext();

  useEffect(() => {
    // Limpar time selecionado ao mudar de liga
    if (setSelectedTeam) {
      setSelectedTeam(null);
    }
  }, [selectedLeague, setSelectedTeam]);
};
