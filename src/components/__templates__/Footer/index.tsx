import './style.scss';
import logoMedium from '../../../assets/img/logo-full-medium.svg';

export const Footer = () => {
  return (
    <footer className="c-footer u-noise">
      <div className="u-container">
        <div className="c-footer__menu-social">
          <h2 className="c-footer__title">Redes Sociais</h2>
          <ul className="c-footer__menu">
            <li className="c-footer__item">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className="c-footer__item">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className="c-footer__item">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li className="c-footer__item">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </a>
            </li>
          </ul>
        </div>
        <div className="c-footer__menu-tips">
          <h2 className="c-footer__title">Legal</h2>
          <ul className="c-footer__menu">
            <li className="c-footer__item">
              <p>Sobre</p>
            </li>
            <li className="c-footer__item">
              <p>Liderança</p>
            </li>
            <li className="c-footer__item">
              <p>Contato</p>
            </li>
            <li className="c-footer__item">
              <p>Políticas de Privacidade</p>
            </li>
          </ul>
        </div>
        <div className="c-footer__menu-fifa">
          <h2 className="c-footer__title">Fifa</h2>
          <ul className="c-footer__menu">
            <li className="c-footer__item">
              <p>Serviços</p>
            </li>
            <li className="c-footer__item">
              <p>Patrocinadores</p>
            </li>
          </ul>
        </div>
        <img src={logoMedium} alt="Logomarca" className="c-footer__img" />
      </div>
    </footer>
  );
};
