import { ReactNode } from 'react';
import './style.scss';

type ErrorProps = {
  children: ReactNode;
};

export const Error = ({ children }: ErrorProps) => {
  return <span className="u-iserror">{children}</span>;
};
