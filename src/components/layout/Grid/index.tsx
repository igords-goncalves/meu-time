import '../../../App.scss';

interface PropsGrid {
  children?: React.ReactNode;
}

export const Grid = ({ children }: PropsGrid) => {
  return <div className="c-grid">{children}</div>;
};
