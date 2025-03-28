import './style.scss';

export const Card = ({ country }: { country: any }) => {
  return (
    <div className="card">
      <div className="card__item">
        <img src={country.flag || '/assets/flag-test.png'} alt="Bandeira" />
        <h3>{country.name}</h3>
      </div>
    </div>
  );
};
