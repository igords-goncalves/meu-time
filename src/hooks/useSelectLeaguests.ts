import { useState, useEffect, ChangeEvent } from 'react';

export const useSelectLeagues = (league: any) => {
  const [selectedSeason, setSelectedSeason] = useState<any>(null);

  useEffect(() => {
    if (league?.seasons) {
      const currentSeason = league.seasons.find(
        (season: any) => season.current,
      );
      setSelectedSeason(currentSeason || league.seasons[0]);
    }
  }, [league]);

  const handleSeasonChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const seasonYear = parseInt(event.target.value);
    const season = league.seasons.find((s: any) => s.year === seasonYear);
    setSelectedSeason(season);
  };

  return {
    selectedSeason,
    handleSeasonChange,
  };
};
