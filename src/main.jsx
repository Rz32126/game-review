import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Error from './components/Error.jsx';
import AllReviews from './components/AllReviews.jsx';
import AddReview from './components/AddReview.jsx';
import MyReview from './components/MyReview.jsx';
import GameList from './components/GameList.jsx';
import Home from './components/Home.jsx';
import UpdateReview from './components/UpdateReview.jsx';
import ExploreDetails from './components/ExploreDetails.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import DataProvider from './providers/DataProvider.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/review'),
      },
      {
        path: "/all-reviews",
        element: <AllReviews></AllReviews>,
        loader: () => fetch('http://localhost:5000/review')
      },
      {
        path: "/add-review",
        element: <AddReview></AddReview>,
      },
      {
        path: "/my-review",
        element: <MyReview></MyReview>,
        loader: () => fetch('http://localhost:5000/review')
      },
      {
        path: "/game-list",
        element: <GameList></GameList>,
        loader: () => fetch('http://localhost:5000/users')
      },
      {
        path: "/update-review/:id",
        element: <UpdateReview></UpdateReview>,
        loader: ({params}) => fetch(`http://localhost:5000/review/${params.id}`)

      },
      {
        path: "/details/:id",
        element: <ExploreDetails></ExploreDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/review/${params.id}`)

      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

    ]
  },
  
  {
    path: "*",
    element: <Error></Error>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </AuthProvider>
  </StrictMode>,
)
