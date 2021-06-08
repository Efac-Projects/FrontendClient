import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Routes
import Private from './components/routing/Private';
import Admin from './components/routing/Admin'
import Business from './components/routing/Business'
//redux
import { Provider } from 'react-redux';
import store from './Store';
import Alert from './components/layouts/Alert';
import { Navbar } from "./components/layouts/navbar"

import AdminHome from './components/Pages/AdminPages/AdminHome'
import Home from './components/Pages/Home';
import About from './components/Pages/UserPages/About'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AppointmentMaking from './components/Pages/UserPages/AppointmentMaking';
import TreatmentMaking from './components/Pages/BusinessPage/TreatmentMaking';
import ForgotPassword from './components/auth/ForgotPassword';
import Contact from './components/Pages/UserPages/Contact';
import Services from './components/Pages/UserPages/Services'
import Footer from './components/layouts/Footer';
import BusinessRegister from './components/Pages/BusinessPage/BusinessRegister';
import setAuthToken from './utils/setAuthtoken';
import Map from './components/layouts/maphome/Map';
import Proffile from './components/Pages/BusinessPage/Proffile';
import {loadUser} from './actions/auth'
import EditProfile from './components/Pages/BusinessPage/EditProfile'
import Appointments from './components/Pages/AdminPages/Appointments';
import ConfirmAppointment from './components/Pages/BusinessPage/ConfirmAppointment';
import BusinessComponet from './components/Pages/BusinessPage/BusinessComponet';
import AppointmentById from './components/Pages/BusinessPage/Appointments/AppointmentById';
import TreatmentById from './components/Pages/BusinessPage/TreatmentById';
import Privilage from './components/Pages/error/Privilage'
import BusinessSignup from './components/Pages/AdminPages/BusinessSignup';

import CountHome from './components/Pages/BusinessPage/count pages/CountHome';

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
          <Route path='/' exact component={Home} />
  
          <Private path='/count' component={CountHome} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/business/signup' component={BusinessSignup} />
          <Private exact path='/appointmentmaking/:businessId' component={AppointmentMaking} />
          <Private exact path='/treatmentmaking/:businessId' component={TreatmentMaking} />
          <Business path='/confirm/appoint/:appointmentId' component={ConfirmAppointment} />
          <Route path='/forgotpassword' component={ForgotPassword} />
          <Route path='/contactus' component={Contact} />
          <Route exact path='/business/register' component={BusinessRegister} />
          <Route exact path='/businessproffile/:businessId' component={Proffile} />
          <Private path='/businessess' component={BusinessComponet} />
          <Business exact path='/appoint/:businessId' component={AppointmentById} />
          <Private exact path='/treatment/:businessId' component={TreatmentById} />
          <Admin path='/appointments' component={Appointments} />
          <Admin exact path='/adminHome' component={AdminHome}/>
          <Route path='/map' component={Map} />
           <Business exact path='/editProfile/:businessId' component={EditProfile} />

           <Route component={Privilage} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;