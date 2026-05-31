import { useEffect, useState } from 'react';
import { Team } from '../types/team';
import { useApi } from './useApi';

export const useFetchTeams = (league: number | null, season: number | null) => {
  const api = useApi();
  const [teams, setTeams] = useState<Team[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function fetchTeams() {
      setLoading(true);
      try {
        const data = await api.getTeams(league, season);
        const response = data.response || [];
        setTeams(response);
        setCurrentPage(data.paging?.current || 1);
        setTotalPages(data.results || response.length);
      } catch (error) {
        if (cancelled) return;
        console.error('Erro ao buscar times:', error);
        setTeams([]);
        setLoading(false);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchTeams();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [league, season]);

  return {
    teams,
    currentPage,
    setCurrentPage,
    totalPages,
    loading,
    league,
    season,
  };
};
