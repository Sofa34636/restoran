import React from 'react';
import './App.css';
import Footer from './Home/components_footer/Footer';
import AboutUs from './AboutUs/Component_contenrAbaut/AboutUs_content';
import Menu from './Menu/Component_contenrM/Menu_content';
import Reviews from './Reviews/Component_contenrRev/Reviews_content';

import { BrowserRouter as Router, Switch, Route,Routes, Link, Redirect, Navigate} from 'react-router-dom';
import Header from './Home/components_hed/Header';
import Main from './Home/components_top/Main';

function App() {
  return (
    <>
    <Header/> 
<Router>
 <Routes>
 <Route path="/"element={ <Main />}/>
    <Route exact path="/About" element={<AboutUs/>}/>
    <Route path="/Menu" element={<Menu/>}/>
    <Route path="/Reviews"element={<Reviews/>}/>
    </Routes>
</Router>
<Footer/>
    </>
   
  );
}

export default App;
