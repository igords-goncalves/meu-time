import './style.scss';
import { useAuth } from '../../../core/context/AuthContext';
import { CircleUserRound, House, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="c-header">
      <nav className="c-header__nav u-container">
        <ul className="c-header__menu">
          <li className="c-header__item">
            <div className="c-header__button">
              <p className="">
                {user
                  ? `${user?.account.firstname} ${user?.account.lastname}`
                  : 'Usuário'}
              </p>
              <CircleUserRound size={28} color="#444" />
            </div>
            <div className="c-header__dropdown">
              <div className="c-header__email">
                <p className="email">{user?.account.email}</p>
                <div className="c-header__plans">
                  <p>
                    <strong>Assinatura</strong>: {user?.subscription.plan}
                  </p>
                  <p className="c-header__plans-status">
                    {user?.subscription.active ? 'active' : ''}
                  </p>
                </div>
                <div className="c-header__plans">
                  <p>
                    <strong>Consultas:</strong> {user?.requests.current}
                  </p>
                  <p>
                    <strong>Limite:</strong> {user?.requests.limit_day}
                  </p>
                </div>
              </div>
              <ul>
                <li>
                  <House size={18} />
                  <a href="#">Home</a>
                </li>
                <li>
                  <LogOut size={18} color="red" />
                  <a href="#" style={{ color: 'red' }} onClick={handleLogout}>
                    Sair
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
