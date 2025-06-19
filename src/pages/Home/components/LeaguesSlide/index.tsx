import { useState } from 'react';
import { Slider } from '../../../../components/__common__';
import { LeagueSelector } from '../LeagueSelector';
import { useCodeCountry } from '../../../../hooks/useCodeCountry';

export const LeaguesSlide = () => {
  const [league, setLeague] = useState<[] | null>([]);
  console.log(league, setLeague);

  const { code } = useCodeCountry();

  console.log(code);

  return (
    <Slider>
      <LeagueSelector />
      <LeagueSelector />
      <LeagueSelector />
      <LeagueSelector />
      <LeagueSelector />
      <LeagueSelector />
      <LeagueSelector />
      <LeagueSelector />
      <LeagueSelector />
    </Slider>
  );
};
