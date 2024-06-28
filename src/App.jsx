import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'



function App() {

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Login/>}/>
    </Route>
  )
)



  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App
