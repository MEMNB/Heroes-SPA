import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './styles.css';
import { HeroesApp } from './HeroesApp';

const router = createBrowserRouter();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={<HeroesApp />} />
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
    
  </React.StrictMode>,
);
