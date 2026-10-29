import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from "react-router";
import {
  createBrowserRouter,

} from "react-router";


import { RouterProvider } from "react-router/dom"; // Note: RouterProvider remains here for web contexts
import A from './A.jsx';
import B from './B.jsx';
import C from './C.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <A></A>,
  },
  {
    path: "/about",
    element: <B></B>,
  },
  {
    path: "/contact",
    element: <C></C>,
  },
]);

// ReactDOM.createRoot(root).render(
//   <RouterProvider router={router} />,
// );

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter> */}
    <RouterProvider router={router} />
    
    {/* <App /> */}
    {/* </BrowserRouter> */}
    
  </StrictMode>,
)
