import './style.scss';

interface CardProps {
  flag: any;
  country: string;
}

export const Card = ({ flag, country }: CardProps) => {
  return (
    <div className="card">
      <div className="card__item">
        <img src={flag} alt="Bandeira" />
        <h3>{country}</h3>
      </div>
    </div>
  );
};
