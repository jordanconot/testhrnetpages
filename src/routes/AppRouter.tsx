import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../pages/Home';
// const Employees = lazy(() => import('../pages/Employees'));
import Employees from '../pages/Employees';
export default function AppRouter() {

  return (
    <Router basename="/testhrnetpages">
      {/* <Suspense fallback={'Chargement'}> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/employees-list' element={<Employees />} />
        </Routes>
      {/* </Suspense> */}
    </Router>
  )
}
