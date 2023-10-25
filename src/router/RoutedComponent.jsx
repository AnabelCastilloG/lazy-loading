import { Routes, Route } from 'react-router-dom';
import Counter from '../pages/Counter';
import Car from '../pages/Car';
import NoMatch from '../pages/NoMatch';
import { lazy, Suspense } from 'react';

const Users = lazy(() => import('../pages/Users'));

export const RoutedComponent = () => {
  return (
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/car" element={<Car />} />
      <Route path="/NoMatch" element={<NoMatch />} />
    </Routes>
  );
};
