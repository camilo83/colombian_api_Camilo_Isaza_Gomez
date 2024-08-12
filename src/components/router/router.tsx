import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('../../pages/homePage/homePage'));
const Dash = lazy(() => import('../../pages/dashboard/dashboard'));

export function Router() {
  return (
    <main>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home/" element={<Home></Home>}></Route>
          <Route path="/colombia_dash/" element={<Dash></Dash>}></Route>
        </Routes>
      </Suspense>
    </main>
  );
}
