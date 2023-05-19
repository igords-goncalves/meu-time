import warming from '../../../assets/img/icon-warming.svg';
import './style.scss';

export const Section = () => {
  return (
    <section className="c-section">
      <div className="u-container">
        <div className="c-section__login">
          <h1>Login Card</h1>
        </div>
        <div className="c-section__text">
          <img src={warming} alt="" className="c-section__img" />
          <p className="c-section__paragraph">
            Para efetuar o login você deve criar uma conta em API-Football
            antes.{' '}
            <span className="u-strong">
              Após criar a conta você receberá uma chave de autenticação,
              preencha o campo acima com sua chave e faça login.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
