import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../components/__common__';
import { Team } from '../../../../types/team';

const btnStyle = {
  height: '30px',
  width: '66px',
  padding: '4px 0',
  fontSize: '11px',
};

type TableCellProps = {
  teams: Team[];
};

export const TableCell = ({ teams }: TableCellProps) => {
  const navigate = useNavigate();

  const handleLeagueSelected = () => {
    navigate('/dashboard');
  };

  return (
    <>
      {teams.map(team => (
        <tr key={team.team.id}>
          <td>
            <img
              src={team.team.logo}
              alt={`${team.team.name} Logo`}
              width={24}
              height={24}
            />
          </td>
          <td>{team.team.name || '-'}</td>
          <td>{team.team.code || '-'}</td>
          <td>{team.team.founded || '-'}</td>
          <td>{team.team.country || '-'}</td>
          <td className="teams-info">
            <Button
              type="button"
              style={btnStyle}
              onClick={handleLeagueSelected}
            >
              + detalhes
            </Button>
          </td>
        </tr>
      ))}
    </>
  );
};
