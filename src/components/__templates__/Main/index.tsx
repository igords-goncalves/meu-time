import { PropsWithChildren } from 'react';

type MainProps = PropsWithChildren;

const Main = ({ children }: MainProps) => {
  return <main>{children}</main>;
};

export default Main;
