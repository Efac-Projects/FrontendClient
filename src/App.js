import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/NavbarIndex';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/Signup';
import ForgotPassword from './components/auth/ForgotPassword';
import AppointmentMaking from './components/Pages/AppointmentMaking';
import AdminSignin from './components/layouts/AdminDashboard/AdminSignin';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/ForgotPassword' component={ForgotPassword} />
        <Route path='/AppointmentMaking' component={AppointmentMaking} />
        <Route path='/About' component={About} />
        <Route path='/AdminSignin' component={AdminSignin} />

      </Switch>
    </Router>
  );
};

export default App;
