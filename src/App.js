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
import Contact from './components/Pages/Contact';
import { Provider } from 'react-redux';
import store from './store';
import Alert from './components/layouts/AdminDashboard/Alert';


const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <Alert/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/forgotpassword' component={ForgotPassword} />
        <Route path='/appointmentMaking' component={AppointmentMaking} />
        <Route path='/about' component={About} />
        <Route path='/adminsignin' component={AdminSignin} />
        <Route path='/home' component={Home} />
        <Route path='/contact' component={Contact} />

      </Switch>
    </Router>
    </Provider>
  );
};

export default App;
