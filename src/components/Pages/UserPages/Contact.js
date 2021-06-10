import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import PropTypes from 'prop-types';
import {createContact} from '../../../actions/contact'

function Copyright() {
  return (

    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='primary' href='./'>
        NoQueue Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
 
  root: {
    height: '100vh',
  },

  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: pink.A700,
  },
  form: {
    width: '40%',
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Contact = ({setAlert,createContact,history}) => {

  const [formData, setFormData] = useState({
    fullname:'',
    email:"",
    message:"",
  })

const{fullname,email,message}=formData; 

const onChange=e=>setFormData(
  {
    ...formData, [e.target.name]:e.target.value
  }
)

const onSubmit=e=>{
  e.preventDefault();
  if (fullname && email && message) {
    e.preventDefault()
    createContact(formData,history)}
        else{
          setAlert('Please fill all the fileds','warning');
        }
      }
      
  const classes = useStyles();


  return (
    <div className="w-full bg-white">

    
    <div className="text-center px-6 py-12 mb-6 bg-gray-200 border-b">
      <h1 className=" text-xl md:text-4xl text-blue-800 pb-4">Contact Us</h1>
      <p className="leading-loose text-gray-dark">
        NoQueue Team
      </p>
    </div>
  

    <div className="container-fluid max-w-4xl mx-auto  px-12 md:px-0">

      <div className="flex flex-wrap justify-start items-start -mx-4">

        <div className="w-full md:w-1/2 p-4">
          
          <form  onSubmit={e=>onSubmit(e)}  >
            <fieldset className="mb-4">
              <label className="block text-sm text-gray-dark pb-2">Name</label>
              <input
              name='fullname'
               onChange={e=>onChange(e)}
               value={fullname}
              className="block w-full border rounded py-2 px-3 text-sm text-gray-700" 
              type="text" />
           
            </fieldset>

            <fieldset className="mb-4">
              <label className="block text-sm text-gray-dark pb-2">Email</label>
              <input 
               name='email'
              onChange={e=>onChange(e)}
              value={email}
              className="block w-full border rounded py-2 px-3 text-sm text-gray-700" 
              type="text" />
            </fieldset>


            <fieldset className="mb-4">
              <label className="block text-sm text-gray-dark pb-2">Message</label>
              <textarea 
               name='message'
              onChange={e=>onChange(e)}
              value={message}
              className="block w-full border border-red-300er rounded py-2 px-3 text-sm text-gray-700 h-32"></textarea>
              <p className="text-xs pt-2 text-red-400">This field is required...</p>
            </fieldset>

            <button 
            type='submit'
            className="text-sm py-2 px-3 bg-blue-600 text-white rounded  bg-blue-700 hover:bg-pink-600  " >Submit</button>
          </form>

        </div>

        <div className="w-full md:w-1/2 p-4">
        <div className="overflow-hidden rounded border mb-6"><div className=""><iframe className="w-full h-64" src="https://maps.google.com/maps?q=Faculty%20of%20Engineering,%20University%20of%20Ruhuna&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>

          <p className="text-black font-bold mb-1">
            Faculty of Engineering
            
          </p>
          <p className="text-sm mb-2">
          University of Ruhuna,<br />
            Hapugala,<br />
            Galle
          </p>

          <p className="text-black font-bold">(091) 2245765</p>
        </div>

      </div>

    </div>

  </div>
  );
}

Contact.propTypes={
  setAlert:PropTypes.func.isRequired,
  createContact:PropTypes.func.isRequired
};


const mapStateToProps=state=>({
   
  conatct:state.contact
  })

export default connect(mapStateToProps, { setAlert,createContact })(Contact);
