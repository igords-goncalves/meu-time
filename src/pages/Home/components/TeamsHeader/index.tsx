import { useLeaguesContext } from '../../../../hooks/useLeaguesContext';
import { TeamsTable } from '../TeamsTable';

const TeamsHeader = () => {
  const { selectedLeague } = useLeaguesContext();

  return (
    <section className="section__leagues">
      <div className="u-container">
        <div className="section__wrapper">
          <h2 className="section__title">Principais Times</h2>
          <p className="section__text">
            Clique no botão <strong>+ detalhes</strong> de um time para ver mais
            informações sobre o time selecionado.
          </p>
        </div>
        {selectedLeague && (
          <div className="slider">
            <TeamsTable />
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamsHeader;
