import { TableCell } from '../TeamCell';
import './style.scss';
import { Search } from 'lucide-react';

export const TeamsTable = () => {
  return (
    <>
      <h3>Liga Seleciona</h3>
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
          <th>Escudo</th>
          <th className="name">Nome</th>
          <th>Sigla</th>
          <th>Fundação</th>
          <th>Arena</th>
          <th>Capacidade</th>
          <th>Local</th>
          <th>Detalhes</th>
        </thead>
        <tbody>
          <TableCell />
        </tbody>
      </table>
    </>
  );
};
