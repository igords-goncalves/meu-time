import { useEffect, useState } from 'react';
import { Slide } from '../../components/Slide';
import { Leagues } from '../../components/Leagues';
import { Footer } from '../../components/templates/Footer';
import { NavBar } from '../../components/templates/NavBar';
import './style.scss';

import { useApi } from '../../hooks/useApi';

export const Home = () => {
  const api = useApi();

  async function handleCountries() {
    const res = await api.getCountries();
    const country = res.response;
    console.log(country);
    return country;
  }
  handleCountries();

  return (
    <>
      <NavBar />
      <section className="section__countries">
        <div className="u-container">
          <div className="section__wrapper">
            <h2 className="section__title">Países</h2>
            <p className="section__text">Selecione um país abaixo.</p>
          </div>
          <Slide />
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
