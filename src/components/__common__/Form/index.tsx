import { ReactNode, FormEvent } from 'react';
import './style.scss';

type FormProps = {
  children: ReactNode;
  onSubmit: any;
};

/**
 * Esse é um container componente que renderiza um formulário reutilizável.
 *
 * @param {FormProps} { children, onSubmit: handleSubmit } - Propriedades do componente.
 * @returns {JSX.Element} - Formulário.
 */
export const Form = ({ children, onSubmit: handleSubmit }: FormProps) => {
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    handleSubmit(e);
    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      {children}
    </form>
  );
};
