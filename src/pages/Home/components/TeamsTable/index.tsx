import { TableCell } from '../TeamCell';
import './style.scss';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLeaguesContext } from '../../../../hooks/useLeaguesContext';
import { useApi } from '../../../../hooks/useApi';
import { Team } from '../../../../types/team';
import { Pagination } from '../../../../components/__common__/Pagination';

const TEAMS_PER_PAGE = 10;

export const TeamsTable = () => {
  const { selectedLeague, selectedSeason } = useLeaguesContext();
  const api = useApi();
  const [teams, setTeams] = useState<Team[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchTeams() {
      if (!selectedLeague || !selectedSeason) return;

      setLoading(true);
      try {
        const data = await api.getTeams(selectedLeague, selectedSeason);
        const response = data.response || [];
        setTeams(response);
        setCurrentPage(1);
      } catch (error) {
        console.error('Erro ao buscar times:', error);
        setTeams([]);
      } finally {
        setLoading(false);
      }
    }

    fetchTeams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLeague, selectedSeason]);

  const paginatedTeams = teams.slice(
    (currentPage - 1) * TEAMS_PER_PAGE,
    currentPage * TEAMS_PER_PAGE,
  );

  const totalPages = Math.ceil(teams.length / TEAMS_PER_PAGE);

  if (loading) {
    return <div className="loading">Carregando times...</div>;
  }

  if (teams.length === 0) {
    return (
      <div className="empty-state">Nenhum time encontrado para esta liga.</div>
    );
  }

  return (
    <>
      <h3>Liga Selecionada</h3>
      <div className="search-container">
        <Search className="search-icon" size={16} />
        <input
          type="text"
          placeholder="Buscar time..."
          className="search-input"
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Escudo</th>
            <th className="name">Nome</th>
            <th>Sigla</th>
            <th>Fundação</th>
            <th>País</th>
            <th>Informações</th>
          </tr>
        </thead>
        <tbody>
          <TableCell teams={paginatedTeams} />
        </tbody>
      </table>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};
