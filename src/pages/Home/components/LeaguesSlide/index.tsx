import { useCallback, useMemo, useState } from 'react';
import { Slider } from '../../../../components/__common__';
import { LeagueSelector } from '../LeagueSelector';
import { Search } from 'lucide-react';
import { League } from '../../../../core/context/LeagueContext';
import { useFetchLeagues } from '../../../../hooks/useFetchLeagues';

export const LeaguesSlide = () => {
  const [searchedLeague, setSearchedLeague] = useState('');

  const { leagues, originalLeagues, setLeagues } = useFetchLeagues();

  // TODO: Tornar toda essa lógica de pesquisa reutilizável para outros componentes.
  const normalizeString = (str: string) => {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  };

  /**
   * Essa função é usada para evitar que a função de comparação seja chamada a cada
   * tecla digitada, melhorando a performance da aplicação.
   * Ela recebe uma função e um delay, e retorna uma nova função que só executa
   * a função original após o delay ter passado desde a última vez que foi chamada.
   * Se a função retornada for chamada novamente antes do delay, o timer é resetado.
   */
  const debauce = (fn: (...args: any[]) => void, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;

    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const compareInputs = useCallback(
    (
      searchValue: string,
      setState: React.Dispatch<React.SetStateAction<League[] | null>>,
      originalData: League[] | null,
    ) => {
      if (searchValue.length < 1 || searchValue === '') {
        setState(originalData);
        return;
      }

      if (searchValue.length >= 1) {
        return setState((prevLeagues: any) =>
          prevLeagues?.filter((l: League) =>
            normalizeString(l.league.name).includes(searchValue),
          ),
        );
      }
    },
    [],
  );

  const handleSearchChange = useMemo(() => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchValue = normalizeString(e.target.value);
      setSearchedLeague(e.target.value);

      debauce(
        () => compareInputs(searchValue, setLeagues, originalLeagues),
        300,
      )(); // IIF
    };
  }, [compareInputs, setLeagues, originalLeagues]);

  return (
    <>
      <p>Pesquise por uma liga</p>
      <div className="search-container">
        <Search className="search-icon" size={16} />
        <input
          type="text"
          placeholder="Buscar liga..."
          className="search-input"
          value={searchedLeague}
          onChange={handleSearchChange}
        />
      </div>{' '}
      <Slider isSlideToShow>
        {leagues?.map((league: any, index: number) => (
          <LeagueSelector
            key={`${league.id}-${index}`}
            league={leagues[index]}
          />
        ))}
      </Slider>
    </>
  );
};
