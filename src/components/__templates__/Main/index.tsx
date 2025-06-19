import './style.scss';
import { PropsWithChildren } from 'react';

type MainProps = PropsWithChildren;

export const Main = ({ children }: MainProps) => {
  return <main>{children}</main>;
};
