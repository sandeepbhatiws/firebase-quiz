import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Components/Header.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import Main from './Components/Main.jsx'
import AddQuiz from './Components/AddQuiz.jsx'
import ViewQuiz from './Components/ViewQuiz.jsx'
import PlayQuiz from './Components/PlayQuiz.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "/add-quiz",
    element: <AddQuiz/>,
  },
  {
    path: "/view-quiz",
    element: <ViewQuiz/>,
  },
  {
    path: "/play-quiz",
    element: <PlayQuiz/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
