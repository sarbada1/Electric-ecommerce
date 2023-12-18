import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/nouislider.min.css';
import './assets/css/slick-theme.css';
import './assets/css/slick.css';
import './assets/css/style.css';
import './assets/js/jquery.min.js';
import './assets/js/slick.min.js';
import './assets/js/bootstrap.min.js';
import './assets/js/main.js';
import './assets/js/nouislider.min.js';

import Header from './components/Header'
import Menu from './components/Menu.jsx';
import Body from './components/Body.jsx';
import SIgnup from './components/auth/SIgnup.jsx';

import Footer from './components/Footer.jsx';


function App() {
  

  return (
    <>

<Header/>
<Menu/>
<Body/>
<SIgnup/>
<Footer/>
    
    </>
  )
}

export default App
