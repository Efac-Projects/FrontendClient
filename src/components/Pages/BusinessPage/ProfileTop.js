import React,{useState,Fragment,useEffect} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import img from '../../../assests/NewLanka.jpg';
import { connect } from 'react-redux';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed
import listPlugin from '@fullcalendar/list'; //For List View
import {
  StaticGoogleMap,
  Marker,
  Path,
} from 'react-static-google-map';



const ProfileTop =({profile: {
    name,
    email,
    phoneNumber,
    postalCode,
    logo,
    businessId,
    summary,
    imageName,
    lat,
    lng
   
  
},auth:{
  isAuthenticated,
  user,
  loading
}}) => {
    return (
      <Fragment>
      
<div className='font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover'>
        <section className="relative py-20">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px", transform: "translateZ(0)" }}
        >
         
        </div>

       


        <div className="max-w-6xl flex items-center  flex-wrap mx-auto  lg:my-0">
    
   
    <div id="profile" className="w-full lg:w-3/5 bg-gray-200 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
    
  
      <div className="p-4  text-center lg:text-left">
      
        <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"> <img src={img} alt=""/></div>
        
    <h1 className="text-3xl font-bold pt-8 lg:pt-0">{name}</h1>
        <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
  
        <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><h3 className="font-bold text-2xl text-gray-600 pr-2"><span className="text-green-900"><i className="fa fa-envelope"></i></span></h3>{email}</p>
    
    <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><h3 className="font-bold text-2xl text-gray-600 pr-2"><span className="text-green-900"><i className="fa fa-phone"></i></span></h3>{phoneNumber}</p>
      <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><h3 className="font-bold text-2xl text-gray-600 pr-2"><span className="text-green-900"><i className="fa fa-address-card"></i></span></h3>{postalCode}</p>
  
    <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"><svg className="h-6 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"/></svg><img src={`https://maps.googleapis.com/maps/api/staticmap?NY&zoom=17&size=400x300&maptype=roadmap
&markers=color:red%7Clabel:C%7C${lat},${lng}
&key=AIzaSyCzTCpl9JjaAFIoTXeEgtHrzR62utfeyII`}/></p>
    <p className="pt-8 text-sm">{summary}</p>
  
        <div className="">


          <div className='mt-6 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap   items-center justify-between'>
{isAuthenticated && !loading? 
user.userRole=='Business'?( email==user.email?(
<Fragment className='m-5'>
<Link to= {`/editProfile/${businessId}`}className="bg-green-700   mb-2 hover:bg-green-900 text-white text-xs font-bold py-2 px-4 rounded-full">
Edit Profile
</Link>
  
<Link to= {`/treatmentmaking/${businessId}`}className="bg-green-700  mb-2 hover:bg-green-900 text-xs text-white font-bold py-2 px-4 rounded-full">
Create Treatment
</Link>


<Link to= {`/appoint/${businessId}`}className="bg-green-700  mb-2 hover:bg-green-900 text-xs text-white font-bold py-2 px-4 rounded-full">
Show Appoitnments
</Link>


</Fragment>

):null ):<Fragment>
<Link to={`/treatment/${businessId}`} className="bg-green-700  mb-2 hover:bg-green-900 text-white text-xs font-bold py-2 px-4 rounded-full">
          Find Your Doctor</Link>

          <Link to={`/appointmentmaking/${businessId}`} className="bg-green-700 hover:bg-green-900 text-xs text-white font-bold py-2 px-4   mb-2 rounded-full">
   Make Appointment
    </Link>

</Fragment> :null}
       

    {isAuthenticated && !loading? 
user.userRole=='Admin'?
( <Fragment className=''>
 

<Link to= {`/appoint/${businessId}`}className="bg-green-700  mb-2 hover:bg-green-900 text-xs text-white font-bold py-2 px-4 rounded-full">
Show Appoitnments
</Link>
  
<Link to= {`/treatmentmaking/${businessId}`}className="bg-green-700  mb-2 hover:bg-green-900 text-xs text-white font-bold py-2 px-4 rounded-full">
Create Treatment
</Link>

<Link to= {`/editProfile/${businessId}`}className="bg-green-700  hover:bg-green-900 text-white text-xs font-bold py-2 mb-2 px-4 rounded-full">
Edit Profile
</Link>

</Fragment>):null:null}
</div>







        </div>
  
     
        
       
  
      </div>




      
  
    </div>
    
    <div className="w-full lg:w-2/5">
		
		<img src={img} className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"/>
		
	</div>
    
    </div>
      </section>

  

<section>


     



</section>




        </div>

        </Fragment>
    )
}

ProfileTop.propTypes = {
profile: PropTypes.object.isRequired,
auth: PropTypes.object.isRequired
}



const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.auth.user,
});

export default connect(mapStateToProps)(ProfileTop);

