import { PropsWithChildren } from 'react';
import ReactSlick from 'react-slick';
import './style.scss';

type SliderProps = PropsWithChildren;

export const Slider = ({ children }: SliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    appendDots: (dots: any) => (
      <div className="dots_wrapper">
        <ul className="dots"> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => <div className="custom_paging">{i + 1}</div>,
  };

  return (
    <ReactSlick className="slide" {...settings}>
      {children}
    </ReactSlick>
  );
};
