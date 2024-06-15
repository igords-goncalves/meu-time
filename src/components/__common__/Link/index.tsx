import { ReactNode } from 'react';
import './style.scss';

type LinkProps = {
  children: ReactNode;
  href: string;
  rel: string;
  target: string;
};

export const Link = ({ children, href, rel, target }: LinkProps) => {
  return (
    <a className="c-logincard__link" href={href} rel={rel} target={target}>
      {children}
    </a>
  );
};
