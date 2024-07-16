import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { RegisterForm } from './components/RegisterForm.jsx'
import {LoginForm} from './components/LoginForm.jsx'
import { UserProfile } from './components/UserProfile.jsx'
import { RenderNavbar } from './components/Navbar.jsx'

const user = {
  id: '01',
  name: 'Daniel S Och',
  email: 'danielshawn@gmm.com'
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
    {
      path: '/user',
      element: <UserProfile user={user}/>
    }
  ]
  },
  {
    path: '/account',
    element: [
      <RenderNavbar />, 
      <div>
        <p>You are in account page!</p>
      </div>
    ],
    // element: (
    //   <RenderNavbar />, 
    //   <div>
    //     <p>You are in account page!</p>
    //   </div>
    // ),
    children: [
      {
        path: '/account/register',
        element: <RegisterForm />
        //element: <div>This is a Register page</div>
      },
      {
        path: '/account/login',
        element: <LoginForm />
        //element: <div>This is a Login page</div>
      }
    ]
  },
  
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
