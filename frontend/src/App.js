import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'

import 'bootstrap/dist/css/bootstrap.min.css'
import Product from './components/Product'

function App() {
  return (
    <Router>
    <Header/>
      <Route path='/' component={Home} exact/>
      <Route path='/about' component={About} exact/>
      <Route path='/contact' component={Contact} exact/>
      <Route path='/product' component={Product} exact></Route> 
    </Router>
  );
}

export default App;
