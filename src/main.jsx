import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello React Router</div>,
  },
  {
    path: "about",
    element: <div>About section here</div>
  },
  {
    path: "blogs",
    element: <div>Blogs section here</div>
  },
  {
    path: "component",
    element: <App></App>
  },
  {
    path: "App",
    Component: App
  }
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
