import { PropsWithChildren, Children, useState, useRef } from 'react';
import ReactSlick from 'react-slick';
import './style.scss';
import { Pagination } from '../Pagination';

type SliderProps = PropsWithChildren<{
  isInfinite?: boolean;
  isSlideToShow?: boolean;
  totalPages?: number;
  currentPage?: number;
}>;

export const Slider = ({
  children,
  isInfinite,
  isSlideToShow,
}: SliderProps) => {
  const slideRef = useRef<ReactSlick>(null);
  const childrenCount = Children.count(children);
  const totalPages = Math.ceil(childrenCount / 3);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage: number | ((prev: number) => number)) => {
    const actualPage =
      typeof newPage === 'function' ? newPage(currentPage) : newPage;
    setCurrentPage(actualPage);
    const slideIndex = (actualPage - 1) * 3;
    slideRef.current?.slickGoTo(slideIndex);
  };

  const settings = {
    infinite: isInfinite ? childrenCount > 3 : false,
    speed: 500,
    slidesToShow: isSlideToShow ? Math.min(3, childrenCount) : 3,
    slidesToScroll: 3,
  };

  return (
    <div>
      <ReactSlick ref={slideRef} className="slide" {...settings}>
        {children}
      </ReactSlick>
      <div className="dots_wrapper">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={handlePageChange}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};
