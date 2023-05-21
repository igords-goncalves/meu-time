import LoginCard from '../../components/LoginCard';
import { Footer } from '../../components/templates/Footer';
import { Header } from '../../components/templates/Header';
import warming from '../../assets/img/icon-warming.svg';
import './style.scss';

export const Login = () => {
  return (
    <>
      <Header />
      <section className="c-section">
        <div className="u-container">
          <div className="c-section__login">
            <LoginCard />
          </div>
          <div className="c-section__text">
            <img src={warming} alt="" className="c-section__img" />
            <p className="c-section__paragraph">
              Para efetuar o login você deve criar uma conta em{' '}
              <a
                className="c-logincard__link"
                target="_blank"
                href="https://dashboard.api-football.com/register"
                rel="noreferrer"
              >
                api-football
              </a>{' '}
              antes.{' '}
              <span className="u-strong">
                Após criar a conta você receberá uma chave de autenticação,
                preencha o campo acima com sua chave e faça login.
              </span>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
