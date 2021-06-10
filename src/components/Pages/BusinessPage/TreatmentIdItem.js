import React ,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import img from '../../../assests/Doc.jpg'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed
import listPlugin from '@fullcalendar/list'; //For List View

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '55ch',
        backgroundColor: theme.palette.background.paper,
      },
      inline: {
        display: 'inline',
      },
      large: {
        width: theme.spacing(11),
        height: theme.spacing(11),
      },

    }));

function TreatmentIdItem({treatment:{
   
   treatmentId,
    businessId,
    specification,
    price,
    doctorName,
    availability,
    day,
    date,
    timeFrom,
    timeTo

}}) 


{

//Calender
const [events, setEvents] = useState([]);

const schedule = () => {
 
  fetch(`https://localhost:5001/api/appoinment/tretment/${treatmentId}`)
    .then(res => {
        return res.json();})
        .then((data)=>{
      console.log(data);
       
setEvents(data)
        })
      
        .catch(err => {
          console.log(err);
        }); 
      
      }
      useEffect(() => {
        schedule();
          
          }, []);

  
return(
    <div>

<div className="content">
    <div className="flex items-center py-2 justify-between w-full my-4 pl-4 sm:pr-4">
        <div className="mr-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-7 md:leading-10 mb-1">{specification}</h2>
      
        </div>
       
      </div>
    <div className="grid mt-8 grid-cols-1 md:grid-cols-1 xl:grid-cols-1">
        <div className="flex flex-col">
            <div className="bg-white shadow-md  rounded-3xl p-4">
                <div className="flex-none lg:flex">
                    <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                        <img src={img}
                            alt="doc" className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl"/>
                    </div>
                    <div className="flex-auto ml-3 justify-evenly py-4">
                        <div className="flex flex-wrap ">
                            <div className="w-full flex-none text-xs text-blue-700 font-medium ">
                              Treatment Id:  {treatmentId}
                            </div>
<h2 className="flex-auto text-lg font-medium">{doctorName}</h2>
                        </div>
                        <p className="mt-3"></p>
                        <div className="flex py-4  text-sm text-gray-600">
                            <div className="flex-1 inline-flex items-center">
                            <span className="text-green-400 hover:text-green-500 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <i class="far fa-check-circle"></i>
                                </svg>
                                </span>
<p className=""> Available: {availability} {day} {date} </p>
                            </div>
                            <div className="flex-1 inline-flex items-center">
                            <span className="text-green-400 hover:text-green-500 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                   <i class="far fa-clock"></i>
                                </svg>
                                </span>
<p className="">{timeFrom} to {timeTo}</p>
                            </div>
                        </div>
                        <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
                        <div className="flex space-x-3 text-sm font-medium">
                            <div className="flex-auto flex space-x-3">
                                <div
                                    className="mb-2 md:mb-0 bg-white px-4 py-0 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                                    <span className="text-green-300 hover:text-green-500 rounded-lg">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="shopify"
                                            className="svg-inline--fa fa-shopify  w-5 h-5  " role="img"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                               
                                           <i class="fas fa-dollar-sign"></i>
                                          
                                        </svg>
                                    </span>
<span>Rs:{price}</span>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div>
      
      <h1 className='text-red-600 text-italic'>You better see the appointment calender before make an appointment </h1>
    
      <FullCalendar
        plugins={[ dayGridPlugin,interactionPlugin,listPlugin ]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
        }}




        eventClick={
          function(arg){
            alert(arg.event.title)
            alert(arg.event.start)
            alert(arg.event.end)
          }}  
        events={events}
      />
  </div>


</div>


    </div>
    
          
        )
      
}


TreatmentIdItem.propTypes = {
treatment:PropTypes.array.isRequired,
}


export default TreatmentIdItem