import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import AboutPage from './pages/AboutPage.jsx';
import HomePage from './pages/HomePage.jsx';
import GamesPage from './pages/GamesPage.jsx';
import GamePage from "./pages/GamePage.jsx";
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';




const router = createBrowserRouter ([
  {
  element : <App/>,
  children : [ {
    path : "/",
    element: <HomePage/>,
  },
  {
    path : "/about",
    element: <AboutPage/>,
  },
  {
    path : "/games",
    element: <GamesPage/>,
  },
  {
    path : "/games/:id",
    element: <GamePage/>,
    loader : ({params})=> fetch (`https://apis.wilders.dev/wild-games/games/${params.id}`)
  },
  {
    path : "*",
    element : <h1 className='flex justify-center p-5 text-3xl bg-blue-500 text-white'>Sorry ! Page not found 🥺 </h1>
  },
],
},

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
);
