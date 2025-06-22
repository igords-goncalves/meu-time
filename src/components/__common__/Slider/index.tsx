import { PropsWithChildren, Children } from 'react';
import ReactSlick from 'react-slick';
import './style.scss';

type SliderProps = PropsWithChildren<{
  isInfinite?: boolean;
  isSlideToShow?: boolean;
}>;

export const Slider = ({
  children,
  isInfinite,
  isSlideToShow,
}: SliderProps) => {
  const childrenCount = Children.count(children);

  const settings = {
    dots: true,
    infinite: isInfinite ? childrenCount > 3 : false,
    speed: 500,
    slidesToShow: isSlideToShow ? Math.min(3, childrenCount) : 3,
    slidesToScroll: 3,
    appendDots: (dots: any) => (
      <div className="dots_wrapper">
        <ul className="dots"> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => <p className="custom_paging">{i + 1}</p>,
  };

  return (
    <ReactSlick className="slide" {...settings}>
      {children}
    </ReactSlick>
  );
};
