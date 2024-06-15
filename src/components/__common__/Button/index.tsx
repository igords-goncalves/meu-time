import './style.scss';

type PropsButton = {
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  style?: object;
  children: React.ReactNode;
};

export const Button = ({ onClick, style, children, type }: PropsButton) => {
  return (
    <button className="c-button" type={type} onClick={onClick} style={style}>
      {children}
    </button>
  );
};
