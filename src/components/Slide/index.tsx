import { Card } from './Cards';
import './style.scss';

import flag from '../../assets/img/flag-test.svg';

export const Slide = () => {
  return (
    <div className="card__wrapper">
      <Card flag={flag} country="Estados Unidos" />
    </div>
  );
};
