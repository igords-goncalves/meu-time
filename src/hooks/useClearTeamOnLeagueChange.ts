import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { useLeaguesContext } from './useLeaguesContext';
import { Team } from '../types/team';

export const useClearTeamOnLeagueChange = (
  setSelectedTeam?: Dispatch<SetStateAction<Team | null>>,
) => {
  const { selectedLeague } = useLeaguesContext();
  const prevLeagueRef = useRef(selectedLeague);

  useEffect(() => {
    if (prevLeagueRef.current !== selectedLeague) {
      prevLeagueRef.current = selectedLeague;
      if (setSelectedTeam) {
        setSelectedTeam(null);
      }
    }
  }, [selectedLeague, setSelectedTeam]);
};
