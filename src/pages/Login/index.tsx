import { Link } from '../../components/__common__/Link';
import { Main } from '../../components/__templates__/Main';
import { Hero } from '../../components/Hero';
import { LoginForm } from '../../components/LoginForm';
import './style.scss';

export const Login = () => {
  return (
    <>
      <Main>
        <>
          <Hero />
          <section className="c-section">
            <div className="c-section__login">
              <LoginForm />
              <p className="c-section__paragraph">
                Para efetuar o login você deve criar uma conta em{' '}
                <Link
                  target="_blank"
                  href="https://dashboard.api-football.com/register"
                  rel="noreferrer"
                >
                  api-football
                </Link>{' '}
                antes.{' '}
                <span className="u-strong">
                  Após criar a conta você receberá uma chave de autenticação,
                  preencha o campo acima com sua chave e faça login.
                </span>
              </p>
            </div>
          </section>
        </>
      </Main>
    </>
  );
};
