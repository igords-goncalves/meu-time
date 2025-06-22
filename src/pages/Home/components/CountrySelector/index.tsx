import './style.scss';
import flagTest from '../../../../assets/img/flag-test.svg';
import { Countries } from '../../../../types/countries';
import { useCodeCountry } from '../../../../hooks/useCodeCountry';

export const CountrySelector = ({ country }: { country: Countries }) => {
  const { setCode } = useCodeCountry();

  return (
    <div className="card">
      <div className="card__item" onClick={() => setCode(country.name)}>
        <img src={country.flag || flagTest} alt="Bandeira" />
        <h3>{country.name}</h3>
      </div>
    </div>
  );
};
