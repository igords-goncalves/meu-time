import { PropsWithChildren } from 'react';
import '../../../App.scss';
import './styles.scss';

type PropsGrid = PropsWithChildren;

export const Grid = ({ children }: PropsGrid) => {
  return <div className="c-grid">{children}</div>;
};
