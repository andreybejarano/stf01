import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';

import App from './App';
import LastMovieInDb from './components/LastMovieInDb';
import ContentWrapper from './components/ContentWrapper';
import GenresInDb from './components/GenresInDb';
import Movie from './components/Movie';
import SearchMovies from './components/SearchMovies';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <ContentWrapper />
      },
      {
        path: '/last-movie',
        element: <LastMovieInDb />
      },
      {
        path: '/genres',
        element: <GenresInDb />
      },
      {
        path: '/movies',
        element: <Movie />
      },
      {
        path: '/search',
        element: <SearchMovies />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
