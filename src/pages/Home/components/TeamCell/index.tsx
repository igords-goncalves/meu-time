import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../components/__common__';
import { useEffect, useState } from 'react';
import { useLeaguesContext } from '../../../../hooks/useLeaguesContext';
import { useApi } from '../../../../hooks/useApi';

const btnStyle = {
  height: '30px',
  width: '66px',
  padding: '4px 0',
  fontSize: '11px',
};

const teamsData = [
  {
    id: 1,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg',
    name: 'Palmeiras',
    abbreviation: 'PAL',
    founded: 1914,
    stadium: 'Allianz Parque',
    capacity: '43,713',
    location: 'São Paulo, SP',
    logoWidth: 24,
    logoHeight: 24,
  },
  {
    id: 2,
    logo: 'https://images.seeklogo.com/logo-png/3/1/corinthians-brasao-logo-png_seeklogo-35532.png',
    name: 'Corinthians',
    abbreviation: 'COR',
    founded: 1910,
    stadium: 'Neo Química Arena',
    capacity: '49,205',
    location: 'São Paulo, SP',
    logoWidth: 28,
    logoHeight: 28,
  },
  {
    id: 3,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg',
    name: 'Flamengo',
    abbreviation: 'FLA',
    founded: 1895,
    stadium: 'Maracanã',
    capacity: '78,838',
    location: 'Rio de Janeiro, RJ',
    logoWidth: 22,
    logoHeight: 24,
  },
];

export const TableCell = () => {
  const navigate = useNavigate();
  const { selectedLeague, selectedSeason } = useLeaguesContext();
  const api = useApi();
  const [teams, setTeams] = useState([]);

  const handleLeagueSelected = () => {
    navigate('/dashboard');
  };

  useEffect(() => {
    async function featchLeagues() {
      if (!selectedLeague && !selectedSeason) return;

      const data = await api.getTeams(selectedLeague, selectedSeason);
      const response = await data.response;
      setTeams(response);
      console.log(teams);
      return;
    }

    featchLeagues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* It's a temporary data for the table */}
      {teamsData.map(team => (
        <tr key={team.id}>
          <td>
            <img
              src={team.logo}
              alt={`${team.name} Logo`}
              width={team.logoWidth}
              height={team.logoHeight}
            />
          </td>
          <td>{team.name}</td>
          <td>{team.abbreviation}</td>
          <td>{team.founded}</td>
          <td>{team.stadium}</td>
          <td>{team.capacity}</td>
          <td>{team.location}</td>
          <td>
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
