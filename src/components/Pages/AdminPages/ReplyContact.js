import React,{useState} from 'react'
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import PropTypes from 'prop-types';
import {createReply} from '../../../actions/contact'
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';

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
       minHeight:'100vw',
      margin: theme.spacing(8, 4),
      display: 'flex',
    
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
  



 const ReplyContact = ({setAlert,createReply,history}) => {


    const [formData, setFormData] = useState({
    
        contactId:"",
        reply:"",
      })
    
    const{  contactId,reply}=formData; 
    
    const onChange=e=>setFormData(
      {
        ...formData, [e.target.name]:e.target.value
      }
    )
    
    const onSubmit=e=>{
      e.preventDefault();
      if (contactId && reply) {
        e.preventDefault()
       createReply(formData,history)}
            else{
              setAlert('Please fill all the fileds','warning');
            }
          }
          
      const classes = useStyles();
    
    


    return (
        <div className="app font-sans min-w-screen min-h-screen bg-grey-200 pt-8 px-4">

    
        <div className="text-center px-6 py-12 mb-6 bg-gray-200 border-b">
          <h1 className=" text-xl md:text-4xl text-blue-800 pb-4">Make a Reply</h1>
          <p className="leading-loose text-gray-dark">
            NoQueue Team
          </p>
        </div>
      
    
        <div className="container-fluid max-w-4xl mx-auto  px-12 md:px-0">
    
          <div className="flex flex-wrap justify-start items-start -mx-4">
    
            <div className="w-full md:w-1/2 p-4">
              
              <form  onSubmit={e=>onSubmit(e)}  >
                <fieldset className="mb-4">
                  <label className="block text-sm text-gray-dark pb-2">Contact Id</label>
                  <input
                  name='contactId'
                   onChange={e=>onChange(e)}
                   value={contactId}
                  className="block w-full border rounded py-2 px-3 text-sm text-gray-700" 
                  type="text" />
               
                </fieldset>
    
    
    
                <fieldset className="mb-4">
                  <label className="block text-sm text-gray-dark pb-2">Message</label>
                  <textarea 
                   name='reply'
                  onChange={e=>onChange(e)}
                  value={reply}
                  className="block w-full border border-red-300er rounded py-2 px-3 text-sm text-gray-700 h-32"></textarea>
                  <p className="text-xs pt-2 text-red-400">This field is required...</p>
                </fieldset>
    
                <button 
                type='submit'
                className="text-sm py-2 px-3 bg-blue-600 text-white rounded  bg-blue-700 hover:bg-pink-600  " >Submit</button>
              </form>
    
            </div>
    
          </div>
    
        </div>
    
      </div>
    )
}

ReplyContact.propTypes={
  setAlert:PropTypes.func.isRequired,
  createReply:PropTypes.func.isRequired
};


const mapStateToProps=state=>({
   
  conatct:state.contact
  })

export default connect(mapStateToProps, { setAlert, createReply })(ReplyContact);
