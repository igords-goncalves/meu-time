import './style.scss';

type PropsButton = {
  onClick: () => void;
  style?: object;
  children: React.ReactNode;
};

export const Button = ({ onClick, style, children }: PropsButton) => {
  return (
    <button className="c-button" onClick={onClick} style={style}>
      {children}
    </button>
  );
};
