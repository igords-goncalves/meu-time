import { useEffect, useState } from 'react';
import { League } from '../core/context/LeagueContext';
import { useApi } from './useApi';
import { useCodeCountry } from './useCodeCountry';
import { useLeaguesContext } from './useLeaguesContext';

export const useFetchLeagues = () => {
  const [originalLeagues, setOriginalLeagues] = useState<League[] | null>(null);

  const { leagues, setLeagues } = useLeaguesContext();
  const api = useApi();
  const { code } = useCodeCountry();

  useEffect(() => {
    let cancelled = false;

    async function featchLeagues() {
      if (!code) return;

      const data = await api.getLeagues(code);
      const response = data.response;

      if (cancelled) return;

      setLeagues(response);
      setOriginalLeagues(response);
      return;
    }

    featchLeagues();

    return () => {
      cancelled = true;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  return {
    leagues,
    setLeagues,
    originalLeagues,
  };
};
