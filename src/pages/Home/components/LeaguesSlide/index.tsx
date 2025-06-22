import { useEffect, useState } from 'react';
import { Slider } from '../../../../components/__common__';
import { LeagueSelector } from '../LeagueSelector';
import { useCodeCountry } from '../../../../hooks/useCodeCountry';
import { useApi } from '../../../../hooks/useApi';

export const LeaguesSlide = () => {
  const [leagues, setLeagues] = useState<[] | null>([]);
  const api = useApi();

  const { code } = useCodeCountry();

  useEffect(() => {
    async function featchLeagues() {
      if (!code) return;

      const data = await api.getLeagues(code);
      const response = await data.response;
      setLeagues(response);
      return;
    }

    featchLeagues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  return (
    <Slider isInfinite isSlideToShow>
      {leagues?.map((league: any, index: number) => (
        <LeagueSelector key={league.id} league={leagues[index]} />
      ))}
    </Slider>
  );
};
