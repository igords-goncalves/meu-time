import './style.scss';
import LoginForm from '../../components/LoginForm';
import Main from '../../components/__templates__/Main';
import { Hero } from '../../components/Hero';
import warming from '../../assets/img/icon-warming.svg';

export const Login = () => {
  return (
    <>
      <Hero />
      <Main>
        {/*TODO: It should be a component called MainSection/ MainContent */}
        <section className="c-section">
          <div className="u-container">
            <div className="c-section__login">
              <LoginForm />
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
      </Main>
    </>
  );
};
