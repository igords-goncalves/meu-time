import { CountrySelector } from '../CountrySelector';
import './style.scss';
import { Slider } from '../../../../components/__common__/Slider';
import { Countries } from '../../../../types/countries';
import { useCountryContext } from '../../../../hooks/useCountryContext';
import { Search } from 'lucide-react';

export const CountriesSlide = () => {
  const { countries } = useCountryContext();

  function groupMappedCountries(countries: Countries[][]) {
    return countries?.map((group: Countries[], index: number) => (
      <div key={index} className="slide-group">
        {group.map((country: Countries, i: number) => (
          <CountrySelector key={i} country={country} />
        ))}
      </div>
    ));
  }

  return (
    <>
      <p>Pesquise por um país</p>
      <div className="search-container">
        <Search className="search-icon" size={16} />
        <input
          type="text"
          placeholder="Buscar país..."
          className="search-input"
        />
      </div>{' '}
      <Slider>{groupMappedCountries(countries.countries)}</Slider>
    </>
  );
};
