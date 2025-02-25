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
import PrivetRoute from './components/PrivetRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://assignment-10-server-lime-five.vercel.app/review'),
      },
      {
        path: "/all-reviews",
        element: <AllReviews></AllReviews>,
        loader: () => fetch('https://assignment-10-server-lime-five.vercel.app/review')
      },
      {
        path: "/add-review",
        element: (<PrivetRoute>
          <AddReview></AddReview>
        </PrivetRoute>)
      },
      {
        path: "/my-review",
        element: (<PrivetRoute>
            <MyReview></MyReview>
        </PrivetRoute>),
        loader: () => fetch('https://assignment-10-server-lime-five.vercel.app/review')
      },
      {
        path: "/game-list",
        element: (<PrivetRoute>
           <GameList></GameList>
        </PrivetRoute>),
        loader: () => fetch('https://assignment-10-server-lime-five.vercel.app/users')
      },
      {
        path: "/update-review/:id",
        element: <UpdateReview></UpdateReview>,
        loader: ({params}) => fetch(`https://assignment-10-server-lime-five.vercel.app/review/${params.id}`)

      },
      {
        path: "/details/:id",
        element: <ExploreDetails></ExploreDetails>,
        loader: ({params}) => fetch(`https://assignment-10-server-lime-five.vercel.app/review/${params.id}`)

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
