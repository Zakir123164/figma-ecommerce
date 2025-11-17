import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './layout/LayoutOne'
import Home from './pages/Home'
import Cart from './pages/Cart'
import './App.css'

const App = () => {

  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayoutOne />}>
        <Route index element={<Home />} />
        <Route path='/cart' element={<Cart/>}/>
      </Route>
    )
  );
  
  return (
    <>
    
    
    <RouterProvider router={myRoute} />
    
    </>
  )
}

export default App