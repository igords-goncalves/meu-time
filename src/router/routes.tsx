import { ReactNode } from 'react';
import { Routes, Route } from 'react-router-dom';

type MainRouteProps = {
  path: string;
  children: ReactNode;
};

export const MainRoute = ({ children, path }: MainRouteProps) => {
  return (
    <Routes>
      <Route path={path} element={children} />
    </Routes>
  );
};
