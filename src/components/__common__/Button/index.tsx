import './style.scss';

type PropsButton = {
  type: 'button' | 'submit' | 'reset';
  onClick?: (e?: any) => void;
  style?: object;
  children: React.ReactNode;
};

export const Button = ({ onClick, style, children, type }: PropsButton) => {
  return (
    <button
      className="c-button"
      type={type}
      onClick={onClick}
      style={style}
      data-testid="cy-button"
    >
      {children}
    </button>
  );
};
