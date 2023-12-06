import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Tarefa from './views/Tarefa/Tarefa';


const router = createBrowserRouter([ 
  {
    path: "/",
    element: <Tarefa/>,
  },
  //{
 //   path: "/",
 //   element: <App/>,
 // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
