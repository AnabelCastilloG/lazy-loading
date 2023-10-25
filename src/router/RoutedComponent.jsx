import { Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { Loading } from '../components/Loading';

const Users = lazy(() => import('../pages/Users'));
const Counter = lazy(() => import('../pages/Counter'));
const Car = lazy(() => import('../pages/Car'));
const NoMatch = lazy(() => import('../pages/NoMatch'));


export const RoutedComponent = () => {
  return (
    <Routes>
      <Route path="/users" element={<Suspense fallback={<Loading/>}><Users /></Suspense>} />
      <Route path="/counter" element={<Suspense fallback={<Loading/>}><Counter /></Suspense>} />
      <Route path="/car" element={<Suspense fallback={<Loading/>}><Car /></Suspense>} />
      <Route path="/NoMatch" element={<Suspense fallback={<Loading/>}><NoMatch /></Suspense>} />  
    </Routes>
  );
};