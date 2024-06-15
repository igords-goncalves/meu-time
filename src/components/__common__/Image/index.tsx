import './style.scss';

type ImageProps = {
  src: string;
  alt: string;
};

export const Image = ({ src, alt }: ImageProps) => {
  return <img src={src} alt={alt} className="c-logincard__img" />;
};
