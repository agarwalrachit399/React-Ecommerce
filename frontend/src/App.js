import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'
import Product from './components/Product'
import Footer from './components/Footer'
import EachProduct from './components/EachProduct'
import products ,{special_product,muffin_product,cookie_product} from './products'

function App() {
  return (
    <Router>
    <Header/>
      <Route path='/' component={Home} exact/>
      <Route path='/about' component={About} exact/>
      <Route path='/contact' component={Contact} exact/>
      <Route path='/product' exact> <Product jsonob={special_product}/> </Route>
      <Route path='/product/cookie' exact> <Product jsonob={cookie_product}/> </Route>
      <Route path='/product/poundcake' exact> <Product jsonob={products}/> </Route>
      <Route path='/product/muffin' exact > <Product jsonob={muffin_product}/> </Route>
      <Route path='/product/:id'> <EachProduct jsonob={special_product}/> </Route>
      <Footer/> 
    </Router>
  );
}

export default App;
