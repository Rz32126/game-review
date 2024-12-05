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
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/all-reviews",
        element: <AllReviews></AllReviews>,
      },
      {
        path: "/add-review",
        element: <AddReview></AddReview>,
      },
      {
        path: "/my-review",
        element: <MyReview></MyReview>,
      },
      {
        path: "/game-list",
        element: <GameList></GameList>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

    ]
  },
  // {
  //   path: "/all-reviews",
  //   element: <AllReviews></AllReviews>,
  // },
  // {
  //   path: "/add-review",
  //   element: <AddReview></AddReview>,
  // },
  // {
  //   path: "/my-review",
  //   element: <MyReview></MyReview>,
  // },
  // {
  //   path: "/game-list",
  //   element: <GameList></GameList>,
  // },
  // {
  //   path: "/login",
  //   element: <Login></Login>,
  // },
  // {
  //   path: "/register",
  //   element: 
  // },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
