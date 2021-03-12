import React, { useState, Fragment } from 'react';

// redux
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import PropTypes from 'prop-types';


const CreateProfile = ({ setAlert }) => {
  

  const [formData, setFormData] = useState({
    UserName: '',
    Email: '',   
    PhoneNumber: ''
  });

  const {
UserName,
Email,
PhoneNumber } = formData;


  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  
  return (
    <Fragment>
      <div className='w-full bg-white rounded  p-8 m-4 '>
        <h1 className='text-2xl xl:text-2xl font-extrabold text-orange-500 text-center '>
          Create Your Profile
        </h1>

        <form
          className='mb-6 mx-3'
          //className={classes.submit}
         
        >
          <p className='text-red-500 text-xs italic mb-2'>
            **Please fill out all the fields.
          </p>

          

          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full '>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='bname'
              >
               User Name
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='uname'
                name='UserName'
                value={UserName}
                type='text'
                placeholder='User Name'
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>

        

        
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-location'
              >
                Phone Number
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-location'
                type='number'
                name='PhoneNumber'
                value={PhoneNumber}
                onChange={(e) => onChange(e)}
                placeholder='phone'
              />
              <p className='text-red-500 text-xs italic'>
                Please fill out this field.
              </p>
            </div>
          </div>

          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-location'
              >
                Email
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-location'
                type='email'
                name='Email'
                value={Email}
                onChange={(e) => onChange(e)}
                placeholder='email'
              />
              <p className='text-red-500 text-xs italic'>
                Please fill out this field.
              </p>
            </div>
          </div>

        
          <button
            type='submit'
            className='mt-5 w-1/2  font-semibold bg-red-700 text-gray-100 w-full py-4 rounded-sm hover:bg-red-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
          >
            <i className='fas fa-user-plus fa 1x w-6  -ml-2' />
            <span className='ml-3'>Submit</span>
          </button>
        </form>
      </div>
    </Fragment>
  );
};

CreateProfile.prototype = {
  setAlert: PropTypes.func.isRequired,
 
};

export default connect(null, { setAlert })(CreateProfile);
