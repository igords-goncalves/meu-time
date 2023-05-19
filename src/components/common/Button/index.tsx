import './style.scss';

interface PropsButton {
  label: string;
  onClick: () => void;
  style?: object;
}

export const Button = ({ onClick, label, style }: PropsButton) => {
  return (
    <button className="c-button" onClick={onClick} style={style}>
      {label}
    </button>
  );
};
