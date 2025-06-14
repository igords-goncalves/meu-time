import Slider from 'react-slick';
import { Card } from './Cards';
import './style.scss';

export const Slide = ({ countries }: { countries: any }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <Slider className="slide" {...settings}>
      {countries?.map((group: any, index: number) => (
        <div key={index} className="slide-group">
          {group?.map((country: any, i: number) => (
            <Card key={i} country={country} />
          ))}
        </div>
      ))}
    </Slider>
  );
};
