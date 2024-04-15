import { useState } from 'react'

import SignIn from './Auth/signIn'
import SignUp from './Auth/signUp'
import Dashboard from './Pages/Dashboard'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp/>,
    },
    {
      path: "/signIn",
      element: <SignIn/>,
    },
    {
      path: "/dashboard",
      element: <Dashboard/>,
    },
  ]);


  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
