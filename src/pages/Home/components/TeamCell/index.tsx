import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../components/__common__';
import { Team } from '../../../../types/team';
import { ROUTES } from '../../../../constants/routes';
import { SyntheticEvent } from 'react';
import './style.scss';
import { useLeaguesContext } from '../../../../hooks/useLeaguesContext';

const TEAM_LOGO_FALLBACK = 'https://logoipsum.com/artwork/413';

const btnStyle = {
  height: '30px',
  width: '66px',
  padding: '4px 0',
  fontSize: '11px',
};

type TableCellProps = {
  teams: Team[];
  league: number | null;
  season: number | null;
};

export const TableCell = ({ teams, league, season }: TableCellProps) => {
  const navigate = useNavigate();
  const { leagues } = useLeaguesContext();

  const handleLeagueSelected = () => {
    const DASHBOARD = ROUTES.find(route => route.path === '/dashboard');
    if (!DASHBOARD) return;
    navigate(DASHBOARD.path);
  };

  const handleImageError = (e: SyntheticEvent<HTMLImageElement>) => {
    if (e.currentTarget.src !== TEAM_LOGO_FALLBACK) {
      e.currentTarget.src = TEAM_LOGO_FALLBACK;
      e.currentTarget.onerror = null;
    }
  };

  const leagueName = leagues?.find(l => l.league.id === league);

  return (
    <>
      {teams.map(team => (
        <tr key={team.team.id}>
          <td>
            {team.team.logo ? (
              <img
                src={team.team.logo}
                alt={team.team.name || '-'}
                width={24}
                height={24}
                onError={handleImageError}
              />
            ) : (
              '-'
            )}
          </td>
          <td>{team.team.name || '-'}</td>
          <td>{team.team.code || '-'}</td>
          <td>{team.team.founded || '-'}</td>
          <td className="teams-country">{team.team.country || '-'}</td>
          <td>{leagueName?.league.name || '-'}</td>
          <td className="teams-season">{season !== null ? season : '-'}</td>
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
