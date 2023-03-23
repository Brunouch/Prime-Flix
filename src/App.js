import { ToastContainer } from 'react-toastify';
import React , {useEffect, useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';
import RoutesApps from './routes';

function App()
{
  
  return (
    <div className='App'>
    <ToastContainer autoClose={3000}/>
    <RoutesApps/>
    </div>
  );
}

export default App;