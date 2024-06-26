import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import BurgersPage from './pages/Main/Burgers'
import PizzasPage from './pages/Main/Pizzas'
import DrinksPage from './pages/Main/Drinks'
import DessertsPage from './pages/Main/Desserts'

import MyCartPage from './pages/MyCart'
import Payment from './pages/Payment'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<BurgersPage />} />
        <Route path='pizzas' element={<PizzasPage />} />
        <Route path='drinks' element={<DrinksPage />} />
        <Route path='desserts' element={<DessertsPage />} />
      </Route>

      <Route path='/cart' element={<MyCartPage />} />
      
      <Route path='/payment' element={<Payment />} />
    </Routes>
  )
}
