import './style.scss';
import logoMedium from '../../../../public/logo-full-medium.svg';

export const Footer = () => {
  return (
    <footer className="c-footer">
      <div className="u-container">
        <div className="c-footer__menu-social">
          <h2 className="c-footer__title">Redes Sociais</h2>
          <ul className="c-footer__menu">
            <li className="c-footer__item">Facebook</li>
            <li className="c-footer__item">Instagram</li>
            <li className="c-footer__item">Twitter</li>
            <li className="c-footer__item">Youtube</li>
          </ul>
        </div>
        <div className="c-footer__menu-tips">
          <h2 className="c-footer__title">Legal</h2>
          <ul className="c-footer__menu">
            <li className="c-footer__item">Sobre</li>
            <li className="c-footer__item">Liderança</li>
            <li className="c-footer__item">Contato</li>
            <li className="c-footer__item">Políticas de Privacidade</li>
          </ul>
        </div>
        <div className="c-footer__menu-fifa">
          <h2 className="c-footer__title">Fifa</h2>
          <ul className="c-footer__menu">
            <li className="c-footer__item">Serviços</li>
            <li className="c-footer__item">Patrocinadores</li>
          </ul>
        </div>
        <img src={logoMedium} alt="Logomarca" className="c-footer__img" />
      </div>
    </footer>
  );
};
