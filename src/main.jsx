import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Component/About/About';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Posts from './Component/Posts/Posts';
import UserIdDetails from './Component/UserIdDetails/UserIdDetails';
import Users from './Component/Users/Users';
import './index.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "home",
        element:<Home></Home>
      },
      {
        path: "/about",
        element:<About></About>
      },
      {
        
        path: "/Header",
        element:<Header></Header>
      },
      {
        path: "/Users",
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path: '/User/:userId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserIdDetails></UserIdDetails>
      },
      {
        path: '/posts',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      }
    ]
    
   
  },
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
