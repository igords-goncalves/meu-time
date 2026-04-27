import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../components/__common__';
import { Team } from '../../../../types/team';

const TEAM_LOGO_FALLBACK = 'https://logoipsum.com/artwork/357';

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

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (e.currentTarget.src !== TEAM_LOGO_FALLBACK) {
      e.currentTarget.src = TEAM_LOGO_FALLBACK;
      e.currentTarget.onerror = null;
    }
  };

  return (
    <>
      {teams.map(team => (
        <tr key={team.team.id}>
          <td>
            <img
              src={team.team.logo || TEAM_LOGO_FALLBACK}
              alt={team.team.name || '-'}
              width={24}
              height={24}
              onError={handleImageError}
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
