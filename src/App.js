import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route, Link
} from "react-router-dom";

import Navigation from './Components/Health/Navigation';
import Home from './Components/Health/Home';
import NoteFound from './Components/Health/NoteFound';
import Resturent from './Components/Resturent/Resturent';
import Details from './Components/Health/Details';
import AuthPovider from './Components/Farebase/AuthPovider';
import PrivateRoute from './Components/Farebase/PrivateRoute';
import Register from './Components/From/Register';
import Footer from './Components/Footer/Footer';
import Technology from './Components/Health/Technology';
import Medical from './Components/Health/Medical';

const App = () => {
  return (
    <div className="App">
      <AuthPovider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/services'>
              <Resturent></Resturent>
            </Route>
            <Route path='/technology'>
              <Technology></Technology>
            </Route>
            <Route path='/medical'>
              <Medical></Medical>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>         
            <PrivateRoute path='/details/:detailsId'>
              <Details></Details>
            </PrivateRoute>
            <Route path='*'>
              <NoteFound></NoteFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthPovider>
    </div>
  );
};

export default App;