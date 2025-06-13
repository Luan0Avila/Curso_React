import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider, Navigate} from "react-router-dom";

import Home from './routes/Home.jsx';
import Contact from './routes/Contact.jsx';

// 2 - Criando o provider
import { CounterContextProvider } from './context/CounterContext.jsx';

// 5 - contexto mais complexo
import { TitleColorContextProvider } from './context/TitleColorContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
      path: "contact",
      element: <Contact/>,
      },
    ]
  }]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TitleColorContextProvider>
      <CounterContextProvider>
        <RouterProvider router={router}/>
      </CounterContextProvider>
    </TitleColorContextProvider>
  </StrictMode>,
)
