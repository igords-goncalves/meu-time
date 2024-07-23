import './style.scss';
import { Link } from '../__common__/Link';
import LoginForm from '../LoginForm';
import { Hero } from '../Hero';

const LoginContent = () => {
  return (
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
  );
};

export default LoginContent;
