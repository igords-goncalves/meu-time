import { TableCell } from '../TeamCell';
import './style.scss';
import { Search } from 'lucide-react';
import { useLeaguesContext } from '../../../../hooks/useLeaguesContext';
import { Pagination } from '../../../../components/__common__/Pagination';
import { useFetchTeams } from '../../../../hooks/useFetchTeams';

const TEAMS_PER_PAGE = 10;

export const TeamsTable = () => {
  const { selectedLeague, selectedSeason } = useLeaguesContext();

  const {
    currentPage,
    setCurrentPage,
    totalPages,
    teams,
    loading,
    league,
    season,
  } = useFetchTeams(selectedLeague, selectedSeason);

  const paginatedTeams = teams.slice(
    (currentPage - 1) * TEAMS_PER_PAGE,
    currentPage * TEAMS_PER_PAGE,
  );

  if (loading) {
    return <div className="loading">Carregando times...</div>;
  }

  if (selectedLeague === null || selectedSeason === null) {
    return (
      <div className="empty-state">Nenhum time encontrado para esta liga.</div>
    );
  }

  return (
    <>
      <p>Pesquise por um time</p>
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
            <th>Liga</th>
            <th className="temporada">Temporada</th>
            <th>Informações</th>
          </tr>
        </thead>
        <tbody>
          <TableCell teams={paginatedTeams} league={league} season={season} />
        </tbody>
      </table>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(totalPages / TEAMS_PER_PAGE)}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};
