import { Slide } from '../../components/Slide';
import { Leagues } from '../../components/Leagues';
import { Footer } from '../../components/__templates__/Footer';
import { NavBar } from '../../components/__templates__/NavBar';
import './style.scss';
import { useEffect, useRef, useState } from 'react';
import { useApi } from '../../hooks/useApi';

export const Home = () => {
  const [countries, setCountries] = useState<any[][] | undefined>();
  const hasFetched = useRef(false);

  const api = useApi();

  useEffect(() => {
    if (hasFetched.current) return;

    const fetchData = async () => {
      try {
        const data = await api.getCountries();
        if (data.response && data.response.length > 0) {
          setCountries(prev => {
            const newGrouped = [];
            for (let i = 0; i < data.response.length; i += 3) {
              newGrouped.push(data.response.slice(i, i + 3));
            }
            return JSON.stringify(prev) === JSON.stringify(newGrouped)
              ? prev
              : newGrouped;
          });
        }
      } catch (error) {
        console.error('Erro ao buscar os dados', error);
      }
    };
    fetchData();
    hasFetched.current = true;
  }, [api]);

  return (
    <>
      <NavBar />
      <section className="section__countries">
        <div className="u-container">
          <div className="section__wrapper">
            <h2 className="section__title">Países</h2>
            <p className="section__text">
              Selecione um país abaixo, para ver o campeonato, a liga, os clubes
              e etc.
            </p>
          </div>
          <div className="slider">
            <Slide countries={countries} />
          </div>
        </div>
      </section>
      <hr />
      <section className="section__leagues">
        <div className="u-container">
          <div className="section__wrapper">
            <h2 className="section__title">Principais Ligas</h2>
            <p className="section__text">
              Selecione uma liga na lista defina uma temporada opcional e
              escolha uma time, para ver todas as informações do time escolhido,
              click no botão ver.
            </p>
          </div>
          <Leagues />
        </div>
      </section>
      <Footer />
    </>
  );
};
