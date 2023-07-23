import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App mt-40">
      <RouterProvider router={router}>

      </RouterProvider>
      <Toaster/>
    </div>
  );
}

export default App;
