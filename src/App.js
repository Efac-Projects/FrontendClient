import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Private from './components/routing/Private';

//redux
import { Provider } from 'react-redux';
import store from './Store';
import Alert from './components/layouts/AdminDashboard/Alert';


//
import Navbar from './components/Navbar/NavbarIndex';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Appointment from './components/Pages/BusinessPage/Appointment';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/Signup';
import AppointmentMaking from './components/Pages/AppointmentMaking.js';
import ForgotPassword from './components/auth/ForgotPassword';
import Contact from './components/Pages/Contact';
import Services from './components/Pages/Services';
import AdminSignin from './components/layouts/AdminDashboard/AdminSignin';
import Dashboard from './components/layouts/AdminDashboard/Navbar';
import Footer from './components/layouts/AdminDashboard/Footer';
import BusinessRegister from './components/Pages/BusinessRegister';
import setAuthToken from './utils/setAuthtoken';
import Map from './components/layouts/AdminDashboard/maphome/Map';
import Proffile from './components/Pages/BusinessPage/Proffile';
import {loadUser} from './actions/auth'
import Allusers from './components/Pages/Showallusers'
import EditProfile from './components/Pages/BusinessPage/EditProfile'
if (localStorage.token) {
  setAuthToken(localStorage.token);
}


const App = () => {

  useEffect(()=>{
    store.dispatch(loadUser())
  }, []) 

  return (
    <Provider store={store}>
      <Router>

      <Route exact render={props=> <Navbar {...props}/>}/>
        <Alert />
        <Switch>
          <Route path='/index' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/appointment' component={Appointment} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Private exact path='/appointmentmaking' component={AppointmentMaking} />
          <Route path='/forgotpassword' component={ForgotPassword} />
          <Route path='/contactus' component={Contact} />
          <Private  path='/business' component={BusinessRegister} />
          <Route exact path='/businessproffile/:businessId' component={Proffile} />
          <Route path='/allusers' component={Allusers} />
          <Route path='/map' component={Map} />
           <Route path='/adminlog' component={AdminSignin} />
           <Route path='/editProfile/:businessId' component={EditProfile} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
