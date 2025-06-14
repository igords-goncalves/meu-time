import './style.scss';
import flagTest from '../../../assets/img/flag-test.svg';

export const Card = ({ country }: { country: any }) => {
  return (
    <div className="card">
      <div className="card__item">
        <img src={country.flag || flagTest} alt="Bandeira" />
        <h3>{country.name}</h3>
      </div>
    </div>
  );
};
