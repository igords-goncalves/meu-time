import './style.scss';
import { CircleUserRound, House, LogOut, RefreshCcw } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../hooks/useAuthContext';
import { useUpdateRequests } from '../../../hooks/useUpdateRequests';

export const NavBar = () => {
  const { user, logout } = useAuthContext();
  const { request, limitDay, handleUpdateRequests, loadingStatus } =
    useUpdateRequests(user);

  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="c-header">
      <nav className="c-header__nav">
        <ul className="c-header__menu">
          <li className="c-header__item">
            <div className="c-header__button">
              <p className="">
                {user
                  ? `${user?.account?.firstname} ${user?.account?.lastname}`
                  : 'Usuário'}
              </p>
              <CircleUserRound size={28} color="#444" />
            </div>
            <div className="c-header__dropdown">
              <div className="c-header__email">
                <p className="email">
                  <strong>Usuário:</strong> {user?.account?.firstname}{' '}
                  {user?.account?.lastname}
                </p>
                <p className="email">
                  {' '}
                  <strong>Email:</strong> {user?.account?.email}
                </p>
                <div className="c-header__plans">
                  <p>
                    <strong>Plano</strong>: {user?.subscription?.plan}
                  </p>
                  <p className="c-header__plans-status">
                    {user?.subscription?.active ? 'ativo' : ''}
                  </p>
                </div>
                <div className="c-header__plans">
                  <p className="c-header__plans-requests">
                    <strong>Consultas: </strong>
                    {loadingStatus ? 'Atualizando...' : request}
                  </p>
                  <p>
                    <strong>Limite:</strong> {limitDay}
                  </p>
                </div>
              </div>
              <ul>
                <li>
                  <RefreshCcw size={14} />
                  <a
                    href="#"
                    onClick={e => {
                      e.preventDefault();
                      handleUpdateRequests();
                    }}
                  >
                    Consultas
                  </a>
                </li>
                <li>
                  <House size={14} />
                  <Link to={'/home'}>Home</Link>
                </li>
                <li>
                  <LogOut size={14} color="red" />
                  <a
                    href="#"
                    style={{ color: 'red' }}
                    onClick={e => {
                      e.preventDefault();
                      handleLogout();
                    }}
                  >
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
