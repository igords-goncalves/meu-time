import './style.scss';

interface PropsButton {
  label: string;
  onClick: () => void;
}

export const Button = ({ onClick, label }: PropsButton) => {
  return (
    <button className="c-button" onClick={onClick}>
      {label}
    </button>
  );
};
